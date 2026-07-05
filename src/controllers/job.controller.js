import {
  getJobsService,
  getJobByIdService,
  createJobService,
  updateJobService,
  deleteJobService,
} from "../services/job.service.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getJobsController = asyncHandler(async (req, res) => {
  const jobs = await getJobsService(req.query);

  res.status(200).json({
    success: true,
    ...jobs,
  });
});

export const getJobByIdController = asyncHandler(async (req, res, next) => {
  const job = await getJobByIdService(req.params.id);

  res.status(200).json({
    success: true,
    data: job,
  });
});

export const createJobController = asyncHandler(async (req, res) => {
  const job = await createJobService(req.validated.body);

  res.status(201).json({
    success: true,
    message: "Job created successfully",
    data: job,
  });
});

export const updateJobController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const updatedJob = await updateJobService(id, req.body);

  res.status(200).json({
    success: true,
    message: "Job updated successfully",
    data: updatedJob,
  });
});

export const deleteJobController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await deleteJobService(id);

  res.status(200).json({
    success: true,
    message: "Job deleted successfully",
  });
});
