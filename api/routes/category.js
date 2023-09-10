import express from 'express';
import { getCategories, addCategories, delCategories } from '../controllers/category.js';

const router = express.Router();

router.post('/getCategories', getCategories);
router.post('/addCategories', addCategories);
router.post('/delCategories', delCategories);
export default router;
