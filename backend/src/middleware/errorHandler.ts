import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const message = err.isOperational ? err.message : 'An unexpected error occurred';

  // In development, send detailed error information
  if (process.env.NODE_ENV === 'development') {
    console.error('ERROR 💥', err);
    return res.status(statusCode).json({
      status: 'error',
      message: err.message,
      stack: err.stack,
    });
  }

  // In production, send a generic message for non-operational errors
  res.status(statusCode).json({
    status: 'error',
    message,
  });
};

export default errorHandler;
