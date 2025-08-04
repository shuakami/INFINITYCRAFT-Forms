import { z } from 'zod';

export const createSubmissionSchema = z.object({
  params: z.object({
    identifier: z.string(),
  }),
  body: z.object({
    // The 'data' field is a flexible JSON object where keys are block IDs
    data: z.record(z.string(), z.any()),
  }),
});

export const getSubmissionsSchema = z.object({
    params: z.object({
        identifier: z.string(),
    }),
    query: z.object({
        // The version comes in as a string, so we parse it to a number.
        version: z.coerce.number().optional(),
    })
});

export type CreateSubmissionInput = z.infer<typeof createSubmissionSchema>['body'];
