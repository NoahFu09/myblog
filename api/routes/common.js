import express from 'express';
import { getCodes, getSystem, insCM006 } from '../controllers/common.js';

const router = express.Router();

router.post('/getCodes/', getCodes);
router.get('/getSystem', getSystem);
router.post('/insCM006', insCM006);

export default router;
