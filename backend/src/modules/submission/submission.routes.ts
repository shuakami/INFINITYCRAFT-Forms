import express from 'express';
import { createSubmissionHandler, getSubmissionsHandler } from './submission.controller';
import validate from '../../middleware/validateResource';
import { createSubmissionSchema } from './submission.schema';
import { protect } from '../../middleware/auth.middleware';

// Note: This router is mounted under /forms/:formId/submissions

const router = express.Router({ mergeParams: true });

// Anyone can create a submission for a published form
router.post('/', validate(createSubmissionSchema), createSubmissionHandler);

// Only authenticated users (form owners) can view submissions via the analysis routes
router.get('/', getSubmissionsHandler);


export default router;
