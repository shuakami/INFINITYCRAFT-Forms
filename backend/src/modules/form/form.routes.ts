import express from 'express';
import {
  createFormHandler,
  getMyFormsHandler,
  getFormVersionHandler,
  createNewFormVersionHandler,
  publishFormVersionHandler,
  deleteFormHandler,
  getAllFormVersionsHandler,
} from './form.controller';
import { protect, optionalProtect } from '../../middleware/auth.middleware';
import validate from '../../middleware/validateResource';
import {
  createFormSchema,
  createNewFormVersionSchema,
  publishFormVersionSchema,
  formIdParamsSchema,
  getFormVersionQuerySchema
} from './form.schema';
import { getAnalysisHandler } from '../analysis/analysis.controller';
import submissionRouter from '../submission/submission.routes';

const router = express.Router();

// --- Semi-Public Route ---
// This route is defined before `protect` is used, so it's not affected by it.
// It uses `optionalProtect` to handle both authenticated and unauthenticated users.
router.get(
    '/:formId',
    validate(getFormVersionQuerySchema),
    validate(formIdParamsSchema),
    optionalProtect,
    getFormVersionHandler
);

// --- All routes below this are strictly protected ---
router.use(protect);

// --- Form-level protected routes ---
router.route('/')
  .post(validate(createFormSchema), createFormHandler)
  .get(getMyFormsHandler);

// The generic '/:formId' GET is already defined above, so we only need DELETE here.
router.delete(
    '/:formId',
    validate(formIdParamsSchema),
    deleteFormHandler
);

// --- Version-level protected routes ---
router.get(
    '/:formId/versions',
    validate(formIdParamsSchema),
    getAllFormVersionsHandler
);
  
router.post(
  '/:formId/versions',
  validate(createNewFormVersionSchema),
  createNewFormVersionHandler
);

router.post(
  '/:formId/publish',
  validate(publishFormVersionSchema),
  publishFormVersionHandler
);

// --- Nested Routes (also protected) ---
router.use('/:formId/submissions', submissionRouter); 
router.get('/:formId/results', validate(formIdParamsSchema), getAnalysisHandler);

export default router;
