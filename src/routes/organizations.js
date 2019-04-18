import { Router } from "express";
import organisationController from "../controllers/organizationController";

const router = Router();

router.post("/newOrganization", organisationController.create);

router.get("/allOrganisations", organisationController.allOrganizations)

router.delete("/organizations/:id", organisationController.deleteOrganization);
router.get("/organizations/:id/reports/verified", organisationController.verifiedIncidents);


export default router;