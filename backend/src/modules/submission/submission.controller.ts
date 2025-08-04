import { Request, Response, NextFunction } from 'express';
import * as submissionService from './submission.service';
import { CreateSubmissionInput } from './submission.schema';
import { AppError } from '../../middleware/errorHandler';

export async function createSubmissionHandler(
    req: Request<{ identifier: string }, {}, CreateSubmissionInput>,
    res: Response,
    next: NextFunction
) {
    try {
        const { identifier } = req.params;
        const ipAddress = req.ip;
        const submission = await submissionService.createSubmission(identifier, req.body, ipAddress);
        res.status(201).json({ status: 'success', data: submission });
    } catch (err) {
        next(err);
    }
}

export async function getSubmissionsHandler(
    req: Request<{ identifier: string }, {}, {}, { version?: string }>,
    res: Response,
    next: NextFunction
) {
    try {
        const { identifier } = req.params;
        const versionStr = req.query.version;
        const version = versionStr ? parseInt(versionStr, 10) : undefined;
        
        if (versionStr && isNaN(version as number)) {
            return next(new AppError('Invalid version number', 400));
        }

        const submissions = await submissionService.getSubmissionsByFormId(identifier, version);
        res.status(200).json({ status: 'success', data: submissions });
    } catch (err) {
        next(err);
    }
}
