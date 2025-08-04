import { Request, Response, NextFunction } from 'express';
import { Role } from '../generated/prisma';
import { AppError } from './errorHandler';
import { UserPayload } from './auth.middleware'; // Import the unified payload type

// Augment the Express Request type to include the user object
// This is now handled globally in auth.middleware.ts, but we ensure consistency here.
declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

export const requireRole = (requiredRoles: Role | Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;
    if (!user) {
      return next(new AppError('Authentication required. Please log in.', 401));
    }
    
    const rolesToCheck = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles];
    
    if (!rolesToCheck.includes(user.role)) {
      return next(new AppError('You do not have permission to perform this action', 403));
    }

    next();
  };
};
