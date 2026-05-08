import express from 'express';
import * as controller from '../2_controller/headerController.js';

const router = express.Router();

router.get('/', controller.getHeader);

export default router;