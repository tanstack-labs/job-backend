import express from "express";
import {
  getJobsController,
  getJobByIdController,
} from "../controllers/job.controller.js";

const router = express.Router();

router.get("/:id", getJobByIdController);
router.get("/", getJobsController);

export default router;
