import express from "express";
import { createJobSchema, updateJobSchema } from "../schemas/job.schema.js";
import { validate } from "../middleware/validate.js";
import {
  getJobsController,
  getJobByIdController,
  createJobController,
  updateJobController,
  deleteJobController,
} from "../controllers/job.controller.js";

const router = express.Router();

router.get("/", getJobsController);
router.get("/:id", getJobByIdController);

router.post("/", validate(createJobSchema), createJobController);

router.patch("/:id", validate(updateJobSchema), updateJobController);

router.delete("/:id", deleteJobController);

export default router;
