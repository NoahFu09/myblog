import express from 'express';
import { getCategories, addCategories, delCategories } from '../controllers/category.js';

const router = express.Router();

router.post('/getCategories', getCategories);
router.post('/addCategories', addCategories);
router.delete('/delCategories/:id', delCategories);
export default router;
