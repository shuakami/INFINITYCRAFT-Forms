import { Request, Response, NextFunction } from 'express';
import { createAdminUser, getAllUsers } from './admin.service';
import { CreateAdminUserInput } from './admin.schema';

export async function createAdminUserHandler(
  req: Request<{}, {}, CreateAdminUserInput>,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await createAdminUser(req.body);
    res.status(201).json({
      status: 'success',
      data: { user },
    });
  } catch (err) {
    next(err);
  }
}

export async function getAllUsersHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const users = await getAllUsers();
        res.status(200).json({
            status: 'success',
            data: { users },
        });
    } catch (err) {
        next(err);
    }
}
