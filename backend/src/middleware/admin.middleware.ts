import { Request, Response, NextFunction } from 'express';
import { AppError } from './errorHandler';
import prisma from '../database/prisma';

export const requireAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;

    if (!user) {
      return next(new AppError('Unauthorized: User not found in request', 401));
    }

    const fullUser = await prisma.user.findUnique({
      where: { id: user.id },
      select: { role: true },
    });

    if (!fullUser || fullUser.role !== 'ADMIN') {
      return next(new AppError('Forbidden: Requires admin privileges', 403));
    }

    return next();
  } catch (err) {
    return next(err);
  }
};
