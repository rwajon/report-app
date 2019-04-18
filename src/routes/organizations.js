import { Router } from "express";
import organisationController from "../controllers/organizationController";

const router = Router();

router.post("/newOrganization", organisationController.create);
router.delete("/organizations/:id", organisationController.deleteOrganization);

export default router;