import express from 'express';
import { getCodes, getSystem, insertCM006, updateCM006, deleteCM006 } from '../controllers/common.js';

const router = express.Router();

router.post('/getCodes/', getCodes);
router.get('/getSystem', getSystem);
router.post('/insertCM006', insertCM006);
router.post('/updateCM006', updateCM006);
router.post('/deleteCM006', deleteCM006);

export default router;
