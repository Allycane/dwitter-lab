import express from 'express';
// import { getHeader } from '../controller/header.js';
import * as controller from '../controller/headerController.js';

const router = express.Router();

router.get("/", controller.getHeaderData);

export default router;