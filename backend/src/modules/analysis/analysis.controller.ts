import { Request, Response, NextFunction } from 'express';
import { analyzeSubmissions } from './analysis.service';
import { AppError } from '../../middleware/errorHandler';

export async function getAnalysisHandler(
  req: Request<{ formId: string }, {}, {}, { version?: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const { formId } = req.params;
    const version = req.query.version ? parseInt(req.query.version, 10) : undefined;

    if (req.query.version && isNaN(version as number)) {
        return next(new AppError('Invalid version number provided', 400));
    }
    
    // Authorization is implicitly handled by the service layer, which checks
    // if the user has permission to view the form/version.
    // However, an explicit check here is still good practice.
    const results = await analyzeSubmissions(formId, version);
    res.status(200).json({ status: 'success', data: results });
  } catch (err) {
    next(err);
  }
}
