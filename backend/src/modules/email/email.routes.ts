import express from 'express';
import { updateEmailNotificationHandler } from './email.controller';
import { updateEmailNotificationSchema } from './email.schema';
import validate from '../../middleware/validateResource';
import { requireRole } from '../../middleware/requireRole';
import { protect } from '../../middleware/auth.middleware';

const router = express.Router();

router.put(
  '/versions/:formVersionId/email-notification',
  protect,
  requireRole(['ADMIN', 'SUPER_ADMIN']),
  validate(updateEmailNotificationSchema),
  updateEmailNotificationHandler
);

export default router;
