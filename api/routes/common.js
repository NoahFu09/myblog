import express from 'express';
import { getCodes } from '../controllers/common.js';

const router = express.Router();

router.post('/getCodes/', getCodes);

export default router;
