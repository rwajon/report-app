import express from 'express';
import ReportController from '../controllers/ReportController';

const router = express.Router();

router.delete('/:id', ReportController.deleteReport);

export default router;