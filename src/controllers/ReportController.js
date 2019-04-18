import dotenv from 'dotenv';
import { Report } from '../models';

dotenv.config();

export default class reportController {
  static async createReport(req, res) {
    try {
      const checkReport = await Report.findAll({
        where: {
          type: req.body.type,
          report: req.body.report,
          description: req.body.description,
          latitude: req.body.latitude,
          longitude: req.body.longitude,
          status: req.body.status
        }
      });

      if (checkReport.length > 0) {
        return res.status(409).send({
          error: 'Sorry, the report already exists'
        });
      }

      const newReport = await Report.create({
        type: req.body.type,
        report: req.body.report,
        description: req.body.description,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        status: req.body.status
      });

      return res.status(201).json({
        status: 201,
        data: [newReport.dataValues]
      });
    } catch (error) {
      console.log(error);
    }

    res.status(500).json({
      message: 'Oops, Something went wrong!!'
    });
  }
}
