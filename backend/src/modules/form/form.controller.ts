import { Request, Response, NextFunction } from 'express';
import * as formService from './form.service';
import { CreateFormInput, UpdateFormInput, PublishFormVersionInput } from './form.schema';
import { AppError } from '../../middleware/errorHandler';

// A helper to ensure user exists on the request, reducing boilerplate
function getUserId(req: Request): string {
    if (!req.user) {
        // This should theoretically not be hit if `protect` middleware is used correctly
        throw new AppError('Authentication required. User not found on request.', 401);
    }
    return req.user.id;
}

export async function createFormHandler(
  req: Request<{}, {}, CreateFormInput>,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = getUserId(req);
    const form = await formService.createForm(userId, req.body);
    res.status(201).json({ status: 'success', data: form });
  } catch (err) {
    next(err);
  }
}

export async function getMyFormsHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = getUserId(req);
    const forms = await formService.getFormsByUserId(userId);
    res.status(200).json({ status: 'success', data: forms });
  } catch (err) {
    next(err);
  }
}

export async function getFormVersionHandler(
    req: Request<{ identifier: string }, {}, {}, { version?: string }>,
    res: Response,
    next: NextFunction
) {
    try {
        const { identifier } = req.params;
        const version = req.query.version ? parseInt(req.query.version, 10) : undefined;
        // User can be undefined here because of optionalProtect
        const userId = req.user?.id; 

        if (version !== undefined && isNaN(version)) {
            return next(new AppError('Invalid version number', 400));
        }

        const formVersion = await formService.getFormVersion(identifier, userId, version);
        
        if (!formVersion) {
            return next(new AppError('Form version not found or not accessible', 404));
        }
        res.status(200).json({ status: 'success', data: formVersion });
    } catch (err) {
        next(err);
    }
}

export async function createNewFormVersionHandler(
  req: Request<{ identifier: string }, {}, UpdateFormInput>,
  res: Response,
  next: NextFunction
) {
  try {
    const { identifier } = req.params;
    const userId = getUserId(req);
    const newVersion = await formService.createNewFormVersion(identifier, userId, req.body);
    res.status(201).json({ status: 'success', data: newVersion });
  } catch (err) {
    next(err);
  }
}

export async function publishFormVersionHandler(
    req: Request<{ identifier: string }, {}, PublishFormVersionInput>,
    res: Response,
    next: NextFunction
) {
    try {
        const { identifier } = req.params;
        const { version, publish } = req.body;
        const userId = getUserId(req);
        const publishedVersion = await formService.publishFormVersion(identifier, userId, version, publish);
        res.status(200).json({ status: 'success', data: publishedVersion });
    } catch (err) {
        next(err);
    }
}

export async function deleteFormHandler(
  req: Request<{ identifier: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const { identifier } = req.params;
    const userId = getUserId(req);
    await formService.deleteForm(identifier, userId);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

export async function getAllFormVersionsHandler(
    req: Request<{ identifier: string }>,
    res: Response,
    next: NextFunction
) {
    try {
        const { identifier } = req.params;
        const userId = getUserId(req);
        const versions = await formService.getAllFormVersions(identifier, userId);
        res.status(200).json({ status: 'success', data: versions });
    } catch (err) {
        next(err);
    }
}
