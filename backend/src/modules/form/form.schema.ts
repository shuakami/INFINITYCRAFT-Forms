import { z } from 'zod';

// Zod schema for a single block within a form version
const formBlockSchema = z.object({
  id: z.string(), // CUIDs are generated on the frontend
  type: z.string(),
  order: z.number().int(),
  properties: z.record(z.string(), z.any()), // A flexible JSON object for block-specific attributes
});

// Schema for the body when creating a new form (and its v1)
export const createFormSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Title cannot be empty'),
    description: z.string().optional().nullable(),
    blocks: z.array(formBlockSchema).optional().nullable(),
    customUrl: z.string().regex(/^[a-zA-Z0-9-]+$/, 'Custom URL can only contain letters, numbers, and hyphens').min(3).optional().nullable(),
  }),
});

// Schema for the body when creating a new form version (updating a form)
export const createNewFormVersionSchema = z.object({
  params: z.object({
    identifier: z.string(),
  }),
  body: z.object({
    title: z.string().min(1, 'Title cannot be empty'),
    description: z.string().optional().nullable(),
    blocks: z.array(formBlockSchema),
    published: z.boolean().optional(),
    customUrl: z.string().regex(/^[a-zA-Z0-9-]+$/, 'Custom URL can only contain letters, numbers, and hyphens').min(3).optional().nullable(),
    submissionsPerIp: z.number().int().positive().optional().nullable(),
    aiEnabled: z.boolean().optional(),
    aiPrompt: z.string().optional().nullable(),
    aiResponseSchema: z.record(z.string(), z.any()).optional().nullable(),
    aiLanguage: z.string().optional().nullable(), // Added for AI language selection
  }),
});

// Schema for publishing a specific form version
export const publishFormVersionSchema = z.object({
    params: z.object({
        identifier: z.string(),
    }),
    body: z.object({
        version: z.number().int().positive({ message: 'Version must be a positive integer' }),
        publish: z.boolean(),
    })
});

// Schema for generic requests that only need a formId or customUrl
export const formIdentifierParamsSchema = z.object({
  params: z.object({
    identifier: z.string(), // This can be a CUID or a custom URL string
  }),
});

// Schema for retrieving a specific form version
export const getFormVersionQuerySchema = z.object({
    query: z.object({
        version: z.string().optional().transform((val) => val ? parseInt(val, 10) : undefined),
    }),
});

// Export inferred types for use in services and controllers
export type CreateFormInput = z.infer<typeof createFormSchema>['body'];
export type UpdateFormInput = z.infer<typeof createNewFormVersionSchema>['body'];
export type PublishFormVersionInput = z.infer<typeof publishFormVersionSchema>['body'];
