import express from 'express';
import ReportController from '../controllers/ReportController';

const router = express.Router();

router.delete('/:id', ReportController.deleteReport);
router.get('/pending', ReportController.pendingReports);

export default router;