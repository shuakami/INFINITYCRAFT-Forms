import { z } from 'zod';

export const loginUserSchema = z.object({
  body: z.object({
    email: z.string({ error: 'Email is required' }).email('Not a valid email'),
    password: z.string({ error: 'Password is required' }),
  }),
});

export type LoginUserInput = z.infer<typeof loginUserSchema>['body'];
