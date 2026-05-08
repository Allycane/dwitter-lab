import express from 'express';
import * as controller from './../controller/footerController.js';

const router = express.Router();

router.get('/', controller.getFooter);

export default router;