import prisma from '../../database/prisma';
import { AppError } from '../../middleware/errorHandler';
import { CreateSubmissionInput } from './submission.schema';
import { analyzeSubmission } from '../ai/ai.service'; // This will also need updates

/**
 * Creates a new submission for a specific, published form version.
 * @param formId - The ID of the parent form.
 * @param data - The submission data, where keys are block IDs.
 * @param ipAddress - The IP address of the submitter.
 * @returns The newly created submission.
 */
export async function createSubmission(formId: string, data: CreateSubmissionInput, ipAddress?: string) {
    // Find the single published version of the form
    const formVersion = await prisma.formVersion.findFirst({
        where: { 
            formId: formId,
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
                // Check against the parent form to count all submissions from this IP
                formId: formId, 
                ipAddress: ipAddress,
            },
        });

        if (submissionCount >= formVersion.submissionsPerIp) {
            throw new AppError(`您已经提交过啦~ 不可以再提交了哦~`, 429);
        }
    }

    // The blocks are now a JSON field on the formVersion
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
            formId: formId,
            formVersionId: formVersion.id, // Link to the specific version
            data: structuredData,
            ipAddress,
            aiAnalysisStatus: formVersion.aiEnabled ? 'PENDING' : undefined,
        },
    });

    // Trigger AI analysis if enabled for this version
    if (formVersion.aiEnabled) {
        // We don't await this call, letting it run in the background.
        analyzeSubmission(submission.id).catch(console.error);
    }

    return submission;
}

/**
 * Retrieves submissions for a given form. Can be filtered by a specific version.
 * @param formId - The ID of the form.
 * @param version - The specific version number to filter by (optional).
 * @returns A list of submissions.
 */
export async function getSubmissionsByFormId(formId: string, version?: number) {
    console.log(`[Submission Service] Getting submissions for formId: ${formId}, version: ${version}`);
    try {
        const submissions = await prisma.submission.findMany({
            where: { 
                formId,
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
                    select: { version: true } // Include version number in the result
                }
            }
        });
        console.log(`[Submission Service] Found ${submissions.length} submissions.`);
        return submissions;
    } catch (error) {
        console.error("[Submission Service] Error during prisma.submission.findMany:", error);
        throw error;
    }
}
