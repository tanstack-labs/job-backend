import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    salary: {
      type: Number,
    },
    category: {
      type: String, // frontend, backend, fullstack
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  },
);

export const Job = mongoose.model("Job", jobSchema);
