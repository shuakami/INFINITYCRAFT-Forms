import { z } from 'zod';
import { Role } from '../../generated/prisma';

export const createAdminUserSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().min(1, { message: 'Email is required' }).email('Not a valid email'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters long'),
    role: z.enum([Role.ADMIN, Role.USER]).default(Role.ADMIN),
  }),
});

export type CreateAdminUserInput = z.infer<typeof createAdminUserSchema>['body'];
