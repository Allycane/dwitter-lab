import express from 'express';
import * as controller from '../controller/usersController.js';

const router = express.Router();

router.post('/login', controller.getLoginData);

router.get('/', controller.getUserData);

export default router;