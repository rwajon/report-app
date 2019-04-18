import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import {Report} from '../models';
import status from '../config/status';

// dotenv.config();

export default class ReportController {
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

     return res.status(500).json({
       message: 'Oops, Something went wrong!!'
     });
 }

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

  // view pending incidents
  static async pendingReports(req, res){
    try{
      await Report.findAll({
        where: {
          type: "pending"
        }
      })
      .then(response => {
        if(response.length > 0) {
          return res.status(status.OK).send({ status: status.OK, data: response});
        }
        res.status(status.NOT_FOUND).send({ status: status.NOT_FOUND, error: "No pending incidents found at this time!" });
        return;

      })
      .catch(error => console.log(error));

    }
    catch(error){
      return res.status(status.BAD_REQUEST).send({ status: status.BAD_REQUEST, error })
    }
  }

  // view verified incidents
  static async verifiedReports(req, res){
    try{
      await Report.findAll({
        where: {
          type: "verified"
        }
      })
      .then(response => {
        if(response.length > 0) {
          return res.status(status.OK).send({ status: status.OK, data: response});
        }
        res.status(status.NOT_FOUND).send({ status: status.NOT_FOUND, error: "No verified incidents found at this time!" });
        return;

      })
      .catch(error => console.log(error));

    }
    catch(error){
      return res.status(status.BAD_REQUEST).send({ status: status.BAD_REQUEST, error })
    }
  }
}
