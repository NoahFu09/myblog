import express from 'express';
import { getCategories, addCategories } from '../controllers/cat.js';

const router = express.Router();

router.get('/', getCategories);
router.post('/', addCategories);

export default router;
