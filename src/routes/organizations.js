import { Router } from "express";
import organisationController from "../controllers/organizationController";

const router = Router();

router.post("/newOrganization", organisationController.create);
router.get("/allOrganisations", organisationController.allOrganizations)

export default router;