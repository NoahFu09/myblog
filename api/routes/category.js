import express from 'express';
import { getCategories, addCategories, delCategories, editCategories } from '../controllers/category.js';

const router = express.Router();

router.post('/getCategories', getCategories);
router.post('/addCategories', addCategories);
router.delete('/delCategories/:id', delCategories);
router.put('/editCategories/:id', editCategories);

export default router;
