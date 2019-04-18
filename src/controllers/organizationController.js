import { Organization } from "../models";

class OrganizationController {
  static async create(req, res) {
    try {
      const checkOrg = await Organization.findAll({
        where: {
          name: req.body.organizationName
        }
      });

      if (checkOrg.length > 0) {
        return res.status(200).send({
          error: "Sorry, the organisation already exists"
        });
      }

      const newOrg = await Organization.create({
        name: req.body.organizationName
      });

      return res.status(201).json({
        status: 201,
        data: [newOrg.dataValues]
      });
    } catch (error) {
      console.log(error);
    }

    res.status(500).json({
      message: " Oops, Something went wrong!!"
    });
  }
  static async allOrganizations(req, res) {
    try {
      const allOrg = await Organization.findAll({ raw: true });
      res.status(200).send({
        message: "All organizations are successfully fetched",
        data: allOrg
      });
    } catch (error) {
      console.log(error);
    }
    res.status(500).json({
      message: "Oops, Something went wrong!!"
    });
  }
  static async editOrganisation(req, res) {
    try {
    } catch (error) {
      console.log(error);
    }
  }
}

export default OrganizationController;
