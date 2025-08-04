import express from 'express';
import validate from '../../middleware/validateResource';
import { createAdminUserHandler, getAllUsersHandler } from './admin.controller';
import { requireRole } from '../../middleware/requireRole';
import { protect } from '../../middleware/auth.middleware'; // Import protect middleware
import { Role } from '../../generated/prisma';
import { createAdminUserSchema } from './admin.schema';

const router = express.Router();

// All routes in this module are protected
router.use(protect);

// All routes after this point require SUPER_ADMIN role
router.use(requireRole(Role.SUPER_ADMIN));

router.get('/users', getAllUsersHandler);
router.post('/users', validate(createAdminUserSchema), createAdminUserHandler);

export default router;
