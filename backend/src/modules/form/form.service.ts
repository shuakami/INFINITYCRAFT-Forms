import prisma from '../../database/prisma';
import { AppError } from '../../middleware/errorHandler';
import { CreateFormInput, UpdateFormInput } from './form.schema';

function sanitizeFormVersionForPublicView(formVersion: any) {
    if (!formVersion) return null;

    const {
        emailNotification,
        aiEnabled,
        aiPrompt,
        aiResponseSchema,
        aiLanguage,
        blocks,
        ...rest
    } = formVersion;

    const sanitizedBlocks = (blocks as any[]).map(block => {
        const { aiNote, ...properties } = block.properties;
        return { ...block, properties };
    });

    return { ...rest, blocks: sanitizedBlocks };
}


/**
 * Creates a new form and its initial version (v1).
 * @param authorId - The ID of the user creating the form.
 * @returns The newly created form with its first version.
 */
export async function createForm(authorId: string, data: CreateFormInput) {
  const { customUrl, ...versionData } = data;

  if (customUrl) {
    const existing = await prisma.form.findUnique({ where: { customUrl } });
    if (existing) {
      throw new AppError('This custom URL is already taken.', 409);
    }
  }

  const form = await prisma.form.create({
    data: {
      authorId,
      customUrl: customUrl,
      versions: {
        create: {
          version: 1,
          title: versionData.title,
          description: versionData.description,
          blocks: (versionData.blocks as any) || [],
          published: false,
        },
      },
    },
    include: {
      versions: {
        orderBy: { version: 'desc' },
        take: 1,
      },
    },
  });
  return form;
}

/**
 * Retrieves all forms for a user, including the latest version details of each form.
 * @param authorId - The ID of the user.
 * @returns A list of forms with their latest version and submission count.
 */
export async function getFormsByUserId(authorId: string) {
  const forms = await prisma.form.findMany({
    where: { authorId },
    orderBy: { updatedAt: 'desc' },
    include: {
      versions: {
        orderBy: { version: 'desc' },
        take: 1,
      },
      _count: {
        select: { submissions: true },
      },
    },
  });
  return forms.map(form => ({
    ...form,
    // Hoist latest version details to top level for easier access
    ...form.versions[0],
  }));
}

async function findFormByIdentifier(identifier: string) {
    return prisma.form.findFirst({
        where: {
            OR: [
                { id: identifier },
                { customUrl: identifier }
            ]
        }
    });
}


/**
 * Retrieves a specific version of a form by its ID or custom URL.
 * If no version is specified, it retrieves the latest version.
 * Ensures that only the author can access unpublished versions.
 * @param identifier - The ID or custom URL of the form.
 * @param userId - The ID of the user requesting the form (for auth check).
 * @param version - The specific version number to retrieve (optional).
 * @returns The requested form version, or null if not found or not accessible.
 */
export async function getFormVersion(identifier: string, userId?: string, version?: number) {
    try {
        const form = await prisma.form.findFirst({
            where: {
                OR: [
                    { id: identifier },
                    { customUrl: identifier }
                ]
            },
            select: { 
                id: true,
                authorId: true,
                latestVersion: true,
                customUrl: true, // FIX: Ensure customUrl is fetched
                versions: {
                    where: version ? { version } : undefined,
                    orderBy: { version: 'desc' },
                    take: 1,
                    include: {
                        emailNotification: true,
                    }
                },
            },
        });

        if (!form || form.versions.length === 0) {
            return null;
        }

        const formVersion = form.versions[0];
        
        const responsePayload = { 
            ...formVersion, 
            authorId: form.authorId, 
            latestVersion: form.latestVersion, 
            customUrl: form.customUrl // FIX: Add customUrl to the response payload
        };

        // Author can always access their own form versions
        if (userId && form.authorId === userId) {
            return responsePayload;
        }

        // Others can only access published versions
        if (!formVersion.published) {
            return null;
        }

        const sanitizedVersion = sanitizeFormVersionForPublicView(responsePayload);

        return sanitizedVersion; // Sanitized version already includes customUrl etc.
    } catch (error) {
        console.error("Error in getFormVersion:", error);
        throw new AppError('An unexpected error occurred while retrieving the form version.', 500);
    }
}


/**
 * Creates a new version of a form with updated content.
 * This is the primary "update" method for a form's structure and settings.
 * @param identifier - The ID or custom URL of the form to update.
 * @param userId - The ID of the user performing the update.
 * @param data - The data for the new version.
 * @returns The newly created form version.
 */
export async function createNewFormVersion(identifier: string, userId: string, data: UpdateFormInput) {
    const { customUrl, ...versionData } = data;

    const form = await findFormByIdentifier(identifier);

    if (!form || form.authorId !== userId) {
        throw new AppError('Form not found or you do not have permission to edit it', 404);
    }
    
    if (customUrl && customUrl !== form.customUrl) {
        const existing = await prisma.form.findUnique({ where: { customUrl } });
        if (existing && existing.id !== form.id) { // More robust check
          throw new AppError('This custom URL is already taken.', 409);
        }
    }

    const latestVersion = await prisma.formVersion.findFirst({
        where: { formId: form.id },
        orderBy: { version: 'desc' },
        include: { emailNotification: true }
    });

    if (!latestVersion) {
        throw new AppError('Could not find any versions for this form.', 500);
    }

    const newVersionNumber = form.latestVersion + 1;
    const wasPublished = latestVersion.published;

    const transactionOperations: any[] = [
        prisma.form.update({
            where: { id: form.id },
            data: { 
                latestVersion: newVersionNumber,
                customUrl: customUrl,
                updatedAt: new Date(),
            },
        }),
        prisma.formVersion.create({
            data: {
                formId: form.id,
                version: newVersionNumber,
                title: versionData.title,
                description: versionData.description,
                blocks: (versionData.blocks as any) || [],
                published: wasPublished, // Inherit published state from the previous version
                submissionsPerIp: versionData.submissionsPerIp,
                aiEnabled: versionData.aiEnabled ?? latestVersion.aiEnabled,
                aiPrompt: versionData.aiPrompt ?? latestVersion.aiPrompt,
                aiResponseSchema: (versionData.aiResponseSchema as any) ?? latestVersion.aiResponseSchema ?? undefined,
                aiLanguage: versionData.aiLanguage ?? latestVersion.aiLanguage,
                emailNotification: latestVersion.emailNotification ? {
                    create: {
                        recipients: latestVersion.emailNotification.recipients,
                        prompt: latestVersion.emailNotification.prompt,
                        conditionPrompt: latestVersion.emailNotification.conditionPrompt,
                        conditionExpectedValue: latestVersion.emailNotification.conditionExpectedValue,
                    }
                } : undefined
            },
            include: {
                emailNotification: true,
            }
        })
    ];

    // If the last version was published, unpublish it as we are publishing the new one.
    if (wasPublished) {
        transactionOperations.push(
            prisma.formVersion.update({
                where: { id: latestVersion.id },
                data: { published: false }
            })
        );
    }
    
    const transactionResult = await prisma.$transaction(transactionOperations);
    const updatedForm = transactionResult[0];
    const newVersion = transactionResult[1];

    const result = {
        ...newVersion,
        authorId: form.authorId,
        latestVersion: updatedForm.latestVersion,
        customUrl: updatedForm.customUrl // Ensure the response contains the updated customUrl
    };

    return result;
}

/**
 * Publishes a specific version of a form.
 * It also unpublishes any other version of the same form.
 * @param identifier - The ID or custom URL of the form.
 * @param userId - The ID of the user performing the action.
 * @param version - The version number to publish.
 */
export async function publishFormVersion(identifier: string, userId: string, version: number, publish: boolean) {
    const form = await findFormByIdentifier(identifier);
    
    if (!form || form.authorId !== userId) {
        throw new AppError('Form not found or you do not have permission to publish it', 404);
    }

    if (publish) {
        // IMPORTANT: This logic is now correct. It only unpublishes other versions *of the same form*.
        // It does not affect other forms.
        const [_, updatedVersion] = await prisma.$transaction([
            prisma.formVersion.updateMany({
                where: {
                    formId: form.id,
                    NOT: { version: version },
                },
                data: { published: false },
            }),
            prisma.formVersion.update({
                where: { formId_version: { formId: form.id, version } },
                data: { published: true },
            })
        ]);
        return updatedVersion;
    } else {
        // If unpublishing, just update the specific version
        const updatedVersion = await prisma.formVersion.update({
            where: { formId_version: { formId: form.id, version } },
            data: { published: false },
        });
        return updatedVersion;
    }
}


/**
 * Deletes a form and all its associated versions and submissions.
 * @param identifier - The ID or custom URL of the form to delete.
 * @param userId - The ID of the user performing the deletion.
 */
export async function deleteForm(identifier: string, userId: string) {
  const form = await findFormByIdentifier(identifier);

  if (!form || form.authorId !== userId) {
    throw new AppError('Form not found or you do not have permission to delete it', 404);
  }

  // With `onDelete: Cascade` in the schema, this single delete will automatically
  // remove all related FormVersion and Submission records.
  await prisma.form.delete({ where: { id: form.id } });
}

/**
 * Retrieves all versions of a single form.
 * @param identifier - The ID or custom URL of the form.
 * @param userId - The ID of the user performing the action (for authorization).
 */
export async function getAllFormVersions(identifier: string, userId: string) {
    const form = await findFormByIdentifier(identifier);

    if (!form || form.authorId !== userId) {
        throw new AppError('Form not found or you do not have permission to view its versions', 404);
    }

    return prisma.formVersion.findMany({
        where: { formId: form.id },
        orderBy: { version: 'desc' },
    });
}
