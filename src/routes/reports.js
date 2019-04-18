import express from 'express';
import ReportController from '../controllers/ReportController';

const router = express.Router();

router.post('/incident', ReportController.createReport);

export default router;
