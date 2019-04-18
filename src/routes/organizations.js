import { Router } from "express";
import organisationController from "../controllers/organizationController";

const router = Router();

router.post("/new", organisationController.create);
router.get("/all", organisationController.allOrganizations);
router.delete("/:id", organisationController.deleteOrganization);
router.get("/:id/reports/verified", organisationController.verifiedIncidents);
router.put("/:id", organisationController.editOrganization);

export default router;
