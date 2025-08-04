import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from './errorHandler';

const JWT_SECRET = process.env.JWT_SECRET || 'a-default-secret-key-for-development';

export interface UserPayload {
  id: string;
  email: string;
  role: 'USER' | 'ADMIN' | 'SUPER_ADMIN';
}

// Modify Express's Request to include our user property
declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

export const protect = (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearer = req.headers.authorization;

    if (!bearer || !bearer.startsWith('Bearer ')) {
      return next(new AppError('Unauthorized: No token provided', 401));
    }

    const [, token] = bearer.split(' ');

    if (!token) {
      return next(new AppError('Unauthorized: Invalid token format', 401));
    }

    const payload = jwt.verify(token, JWT_SECRET) as UserPayload;
    req.user = payload; // Attach user to req, not res.locals
    
    return next();
  } catch (e) {
    console.error(e);
    const error = new AppError('Unauthorized: Invalid token', 401);
    return next(error);
  }
};

export const optionalProtect = (req: Request, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;

  if (bearer && bearer.startsWith('Bearer ')) {
    const [, token] = bearer.split(' ');
    if (token) {
      try {
        const payload = jwt.verify(token, JWT_SECRET) as UserPayload;
        req.user = payload; // Attach user to req
      } catch (e) {
        // Ignore invalid token in optional auth
        console.log("Optional auth: Invalid token provided, proceeding without auth.");
      }
    }
  }
  
  next();
};
