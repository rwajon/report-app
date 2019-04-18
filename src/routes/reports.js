import express from 'express';
import ReportController from '../controllers/ReportController';

const router = express.Router();

router.post('/incident', ReportController.createReport);
router.delete('/:id', ReportController.deleteReport);
router.get('/pending', ReportController.pendingReports);
router.get('/verified', ReportController.verifiedReports);

export default router;
