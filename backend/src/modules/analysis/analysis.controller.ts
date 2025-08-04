import { Request, Response, NextFunction } from 'express';
import { analyzeSubmissions } from './analysis.service';
import { AppError } from '../../middleware/errorHandler';

export async function getAnalysisHandler(
  req: Request<{ identifier: string }, {}, {}, { version?: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const { identifier } = req.params;
    const version = req.query.version ? parseInt(req.query.version, 10) : undefined;

    if (req.query.version && isNaN(version as number)) {
        return next(new AppError('Invalid version number provided', 400));
    }
    
    const results = await analyzeSubmissions(identifier, version);
    res.status(200).json({ status: 'success', data: results });
  } catch (err) {
    next(err);
  }
}
