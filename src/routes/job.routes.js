import express from "express";
import { getJobsController } from "../controllers/job.controller.js";

const router = express.Router();

router.get("/", getJobsController);

export default router;
