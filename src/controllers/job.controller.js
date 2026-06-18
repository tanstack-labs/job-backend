import { getJobsService } from "../services/job.service.js";

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
