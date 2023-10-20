import express from 'express';
import { getCodes } from '../controllers/sy001.js';

const router = express.Router();

router.post('/getCodes/', getCodes);

export default router;
