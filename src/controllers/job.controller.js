import { getJobsService, getJobByIdService } from "../services/job.service.js";

export const getJobByIdController = async (req, res, next) => {
  try {
    const job = await getJobByIdService(req.params.id);

    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    next(error);
  }
};

export const getJobsController = async (req, res, next) => {
  try {
    const result = await getJobsService(req.query);

    res.status(200).json({
      success: true,
      ...result,
    });
  } catch (error) {
    next(error);
  }
};
