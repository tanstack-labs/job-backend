import { Job } from "../models/job.model.js";
import AppError from "../utils/AppError.js";

export const getJobsService = async (query) => {
  const {
    page = 1,
    limit = 10,
    search = "",
    category,
    minSalary,
    maxSalary,
  } = query;

  const filter = {};

  // 🔍 Search (title or company)
  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: "i" } },
      { company: { $regex: search, $options: "i" } },
    ];
  }

  // 📂 Category filter
  if (category) {
    filter.category = category;
  }

  // 💰 Salary filter
  if (minSalary || maxSalary) {
    filter.salary = {};
    if (minSalary) filter.salary.$gte = Number(minSalary);
    if (maxSalary) filter.salary.$lte = Number(maxSalary);
  }

  const skip = (page - 1) * limit;

  // ⏳ Artificial delay (IMPORTANT for frontend later)
  await new Promise((res) => setTimeout(res, 800));

  const jobs = await Job.find(filter)
    .skip(skip)
    .limit(Number(limit))
    .sort({ createdAt: -1 });

  const total = await Job.countDocuments(filter);

  return {
    data: jobs,
    total,
    page: Number(page),
    pages: Math.ceil(total / limit),
  };
};

export const getJobByIdService = async (id) => {
  // ⏳ Artificial delay (IMPORTANT for frontend later)
  await new Promise((res) => setTimeout(res, 800));
  const job = await Job.findById(id);

  if (!job) {
    throw new Error("Job not found");
  }

  return job;
};

export const createJobService = async (jobData) => {
  const job = await Job.create(jobData);

  return job;
};

export const updateJobService = async (id, data) => {
  const job = await Job.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!job) {
    throw new AppError("Job not found", 404);
  }

  return job;
};

export const deleteJobService = async (id) => {
  const job = await Job.findByIdAndDelete(id);

  if (!job) {
    throw new AppError("Job not found", 404);
  }

  return job;
};
