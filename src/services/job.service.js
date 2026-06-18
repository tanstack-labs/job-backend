import { Job } from "../models/job.model.js";

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
