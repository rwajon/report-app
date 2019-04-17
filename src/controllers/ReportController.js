import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import {Report} from '../models';
import status from '../config/status';

// dotenv.config();

export default class ReportController {
  static async deleteReport(req, res) {
    try {
      const { id } = req.params;
      const checkReport = await Report.findAll({
        where: { id }});
      if (checkReport) {
        return res.status(404).json({
          status: 404,
          error: `Report with  id ${id} not found!`,
        });
      }
      const deleteReport = await Report.destroy({
        where: {id}
      });
      return res.status(200).json({
        status: 200,
        checkReport,
        message: 'Report deleted successful',
      });
    } catch (error) {
      console.log(error);
    }

    return res.status(500).json({
      error: 'Ooops, something went wrong!',
    });
  }
}
