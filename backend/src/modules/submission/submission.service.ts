import prisma from '../../database/prisma';
import { AppError } from '../../middleware/errorHandler';
import { CreateSubmissionInput } from './submission.schema';
import { analyzeSubmission } from '../ai/ai.service'; 

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
 * Creates a new submission for a specific, published form version.
 * @param identifier - The ID or custom URL of the parent form.
 * @param data - The submission data, where keys are block IDs.
 * @param ipAddress - The IP address of the submitter.
 * @returns The newly created submission.
 */
export async function createSubmission(identifier: string, data: CreateSubmissionInput, ipAddress?: string) {
    const form = await findFormByIdentifier(identifier);
    if (!form) {
        throw new AppError('Form not found.', 404);
    }
    
    // Find the single published version of the form
    const formVersion = await prisma.formVersion.findFirst({
        where: { 
            formId: form.id,
            published: true,
        },
    });

    if (!formVersion) {
        throw new AppError('该表单还没有发布呢~ 请先到控制台发布一下它）', 404);
    }
    
    // IP Limiting Logic, now based on the version's setting
    if (formVersion.submissionsPerIp && ipAddress) {
        const submissionCount = await prisma.submission.count({
            where: {
                formId: form.id, 
                ipAddress: ipAddress,
            },
        });

        if (submissionCount >= formVersion.submissionsPerIp) {
            throw new AppError(`您已经提交过啦~ 不可以再提交了哦~`, 429);
        }
    }

    const blocks = formVersion.blocks as any[];
    const blocksMap = new Map(blocks.map(block => [block.id, block]));
    const structuredData: { [key: string]: { label: string, value: any, type: string, properties: any } } = {};

    for (const blockId in data.data) {
        if (Object.prototype.hasOwnProperty.call(data.data, blockId)) {
            const block = blocksMap.get(blockId);
            if (block) {
                structuredData[blockId] = {
                    label: block.properties?.label ?? 'Unnamed Question',
                    value: data.data[blockId],
                    type: block.type,
                    properties: block.properties,
                };
            }
        }
    }

    const submission = await prisma.submission.create({
        data: {
            formId: form.id,
            formVersionId: formVersion.id,
            data: structuredData,
            ipAddress,
            aiAnalysisStatus: formVersion.aiEnabled ? 'PENDING' : undefined,
        },
    });

    if (formVersion.aiEnabled) {
        analyzeSubmission(submission.id).catch(console.error);
    }

    return submission;
}

/**
 * Retrieves submissions for a given form. Can be filtered by a specific version.
 * @param identifier - The ID or custom URL of the form.
 * @param version - The specific version number to filter by (optional).
 * @returns A list of submissions.
 */
export async function getSubmissionsByFormId(identifier: string, version?: number) {
    const form = await findFormByIdentifier(identifier);
    if (!form) {
        throw new AppError('Form not found.', 404);
    }

    try {
        const submissions = await prisma.submission.findMany({
            where: { 
                formId: form.id,
                ...(version && {
                    formVersion: {
                        version: version
                    }
                })
            },
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                formVersion: {
                    select: { version: true } 
                }
            }
        });
        return submissions;
    } catch (error) {
        console.error("[Submission Service] Error during prisma.submission.findMany:", error);
        throw error;
    }
}
