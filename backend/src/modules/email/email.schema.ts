import { z } from 'zod';

export const updateEmailNotificationSchema = z.object({
  recipients: z.array(z.string().email()).optional(),
  prompt: z.string().nullable().optional(),
  conditionPrompt: z.string().nullable().optional(),
  conditionExpectedValue: z.string().nullable().optional(),
});

export type UpdateEmailNotificationInput = z.infer<typeof updateEmailNotificationSchema>;
