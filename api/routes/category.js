import express from 'express';
import { getCategories, addCategories } from '../controllers/category.js';

const router = express.Router();

router.post('/getCategories', getCategories);
router.post('/addCategories', addCategories);

export default router;
