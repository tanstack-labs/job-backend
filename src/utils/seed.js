import { Job } from "../models/job.model.js";

export const seedJobs = async () => {
  await Job.deleteMany();

  await Job.insertMany([
    {
      title: "React Developer",
      company: "Google",
      location: "Remote",
      salary: 120000,
      category: "frontend",
      description: "Build UI applications",
    },
    {
      title: "Node.js Backend Engineer",
      company: "Amazon",
      location: "Bangalore",
      salary: 150000,
      category: "backend",
      description: "Work on APIs",
    },
    {
      title: "Fullstack Developer",
      company: "Microsoft",
      location: "Hyderabad",
      salary: 140000,
      category: "fullstack",
      description: "Frontend + Backend",
    },
  ]);

  console.log("🌱 Seed data inserted");
};
