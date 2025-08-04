import prisma from '../../database/prisma';
import { AppError } from '../../middleware/errorHandler';
import { CreateFormInput, UpdateFormInput } from './form.schema';

/**
 * Creates a new form and its initial version (v1).
 * @param authorId - The ID of the user creating the form.
 * @returns The newly created form with its first version.
 */
export async function createForm(authorId: string, data: CreateFormInput) {
  const form = await prisma.form.create({
    data: {
      authorId,
      versions: {
        create: {
          version: 1,
          title: data.title,
          description: data.description,
          blocks: (data.blocks as any) || [],
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

/**
 * Retrieves a specific version of a form.
 * If no version is specified, it retrieves the latest version.
 * Ensures that only the author can access unpublished versions.
 * @param formId - The ID of the form.
 * @param userId - The ID of the user requesting the form (for auth check).
 * @param version - The specific version number to retrieve (optional).
 * @returns The requested form version, or null if not found or not accessible.
 */
export async function getFormVersion(formId: string, userId?: string, version?: number) {
    try {
        const form = await prisma.form.findUnique({
            where: { id: formId },
            select: { 
                authorId: true,
                latestVersion: true,
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

        // Author can always access their own form versions
        if (userId && form.authorId === userId) {
            return { ...formVersion, authorId: form.authorId, latestVersion: form.latestVersion };
        }

        // Others can only access published versions
        if (!formVersion.published) {
            return null;
        }

        return { ...formVersion, authorId: form.authorId, latestVersion: form.latestVersion };
    } catch (error) {
        console.error("Error in getFormVersion:", error);
        // We throw a generic error to be caught by the global error handler.
        // This prevents leaking database-specific error details to the client.
        throw new AppError('An unexpected error occurred while retrieving the form version.', 500);
    }
}


/**
 * Creates a new version of a form with updated content.
 * This is the primary "update" method for a form's structure and settings.
 * @param formId - The ID of the form to update.
 * @param userId - The ID of the user performing the update.
 * @param data - The data for the new version.
 * @returns The newly created form version.
 */
export async function createNewFormVersion(formId: string, userId: string, data: UpdateFormInput) {
    // 1. Find the form and the LATEST version with its email settings
    const form = await prisma.form.findUnique({
        where: { id: formId },
        include: {
            versions: {
                orderBy: { version: 'desc' },
                take: 1,
                include: {
                    emailNotification: true,
                }
            }
        }
    });

    if (!form || form.authorId !== userId) {
        throw new AppError('Form not found or you do not have permission to edit it', 404);
    }

    const latestVersion = form.versions[0];
    const newVersionNumber = form.latestVersion + 1;

    // 2. Create the new version in a transaction
    const [updatedForm, newVersion] = await prisma.$transaction([
        prisma.form.update({
            where: { id: formId },
            data: { 
                latestVersion: newVersionNumber,
                updatedAt: new Date(),
            },
        }),
        prisma.formVersion.create({
            data: {
                formId,
                version: newVersionNumber,
                // Carry over settings from the previous version
                title: data.title,
                description: data.description,
                blocks: (data.blocks as any) || [],
                published: false, // New versions are always unpublished by default
                submissionsPerIp: data.submissionsPerIp,
                // Carry over AI settings from the LATEST version, but allow overrides from the payload
                aiEnabled: data.aiEnabled ?? latestVersion.aiEnabled,
                aiPrompt: data.aiPrompt ?? latestVersion.aiPrompt,
                aiResponseSchema: (data.aiResponseSchema as any) ?? latestVersion.aiResponseSchema ?? undefined,
                aiLanguage: data.aiLanguage ?? latestVersion.aiLanguage,
                
                // 3. If the latest version had an email notification, create one for the new version
                emailNotification: latestVersion.emailNotification ? {
                    create: {
                        recipients: latestVersion.emailNotification.recipients,
                        prompt: latestVersion.emailNotification.prompt,
                        conditionPrompt: latestVersion.emailNotification.conditionPrompt,
                        conditionExpectedValue: latestVersion.emailNotification.conditionExpectedValue,
                    }
                } : undefined
            },
            include: { // Include the notification in the return value
                emailNotification: true,
            }
        })
    ]);

    // Manually add authorId and latestVersion to the returned object for consistency
    const result = {
        ...newVersion,
        authorId: form.authorId,
        latestVersion: updatedForm.latestVersion,
    };

    return result;
}

/**
 * Publishes a specific version of a form.
 * It also unpublishes any other version of the same form.
 * @param formId - The ID of the form.
 * @param userId - The ID of the user performing the action.
 * @param version - The version number to publish.
 */
export async function publishFormVersion(formId: string, userId: string, version: number, publish: boolean) {
    const form = await prisma.form.findUnique({
        where: { id: formId },
        select: { authorId: true }
    });
    
    if (!form || form.authorId !== userId) {
        throw new AppError('Form not found or you do not have permission to publish it', 404);
    }

    if (publish) {
        // If publishing, ensure all other versions are unpublished
        const [_, updatedVersion] = await prisma.$transaction([
            prisma.formVersion.updateMany({
                where: {
                    formId: formId,
                    NOT: { version: version },
                },
                data: { published: false },
            }),
            prisma.formVersion.update({
                where: { formId_version: { formId, version } },
                data: { published: true },
            })
        ]);
        return updatedVersion;
    } else {
        // If unpublishing, just update the specific version
        const updatedVersion = await prisma.formVersion.update({
            where: { formId_version: { formId, version } },
            data: { published: false },
        });
        return updatedVersion;
    }
}


/**
 * Deletes a form and all its associated versions and submissions.
 * @param formId - The ID of the form to delete.
 * @param userId - The ID of the user performing the deletion.
 */
export async function deleteForm(formId: string, userId: string) {
  const form = await prisma.form.findUnique({
    where: { id: formId },
    select: { authorId: true },
  });

  if (!form || form.authorId !== userId) {
    throw new AppError('Form not found or you do not have permission to delete it', 404);
  }

  // With `onDelete: Cascade` in the schema, this single delete will automatically
  // remove all related FormVersion and Submission records.
  await prisma.form.delete({ where: { id: formId } });
}

/**
 * Retrieves all versions of a single form.
 * @param formId - The ID of the form.
 * @param userId - The ID of the user performing the action (for authorization).
 */
export async function getAllFormVersions(formId: string, userId: string) {
    const form = await prisma.form.findUnique({
        where: { id: formId },
        select: { authorId: true },
    });

    if (!form || form.authorId !== userId) {
        throw new AppError('Form not found or you do not have permission to view its versions', 404);
    }

    return prisma.formVersion.findMany({
        where: { formId },
        orderBy: { version: 'desc' },
    });
}
