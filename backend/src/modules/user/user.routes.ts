import express from 'express';
import { loginHandler } from './user.controller';
import validate from '../../middleware/validateResource';
import { loginUserSchema } from './user.schema';

const router = express.Router();

router.post('/login', validate(loginUserSchema), loginHandler);

export default router;
