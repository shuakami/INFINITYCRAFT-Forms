import { Request, Response, NextFunction } from 'express';
import { loginUser } from './user.service';
import { LoginUserInput } from './user.schema';

/**
 * Handles user login requests.
 */
export async function loginHandler(
  req: Request<{}, {}, LoginUserInput>,
  res: Response,
  next: NextFunction
) {
  try {
    const { token, user } = await loginUser(req.body);
    res.status(200).json({
      status: 'success',
      token,
      user
    });
  } catch (err) {
    // Forward the error to the global error handler
    next(err);
  }
}
