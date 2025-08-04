import { Request, Response, NextFunction } from 'express';
import * as submissionService from './submission.service';
import { CreateSubmissionInput } from './submission.schema';
import { AppError } from '../../middleware/errorHandler';

export async function createSubmissionHandler(
    req: Request<{ formId: string }, {}, CreateSubmissionInput>,
    res: Response,
    next: NextFunction
) {
    try {
        const { formId } = req.params;
        const ipAddress = req.ip;
        const submission = await submissionService.createSubmission(formId, req.body, ipAddress);
        res.status(201).json({ status: 'success', data: submission });
    } catch (err) {
        next(err);
    }
}

export async function getSubmissionsHandler(
    req: Request<{ formId: string }, {}, {}, { version?: string }>,
    res: Response,
    next: NextFunction
) {
    try {
        const { formId } = req.params;
        const versionStr = req.query.version;
        const version = versionStr ? parseInt(versionStr, 10) : undefined;

        console.log(`[Submission Controller] Handling getSubmissions for formId: ${formId}, version string: '${versionStr}'`);
        
        if (versionStr && isNaN(version as number)) {
            console.log(`[Submission Controller] Invalid version number provided.`);
            return next(new AppError('Invalid version number', 400));
        }

        console.log(`[Submission Controller] Parsed version number: ${version}. Calling service...`);
        const submissions = await submissionService.getSubmissionsByFormId(formId, version);
        res.status(200).json({ status: 'success', data: submissions });
    } catch (err) {
        console.error("[Submission Controller] Error in getSubmissionsHandler:", err);
        next(err);
    }
}
