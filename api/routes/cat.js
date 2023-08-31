import express from 'express';
import { getCategories } from '../controllers/cat.js';

const router = express.Router();

router.post('/', getCategories);

export default router;
