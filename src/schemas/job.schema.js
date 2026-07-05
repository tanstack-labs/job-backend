import { z } from "zod";

export const createJobSchema = z.object({
  body: z.object({
    title: z.string().trim().min(3, "Title must be at least 3 characters"),

    company: z.string().trim().min(2, "Company name is required"),

    location: z.string().trim().min(2, "Location is required"),

    salary: z.number().positive("Salary must be positive"),

    category: z.enum(["frontend", "backend", "fullstack"]),

    description: z.string().trim().min(10, "Description is too short"),
  }),
});

export const updateJobSchema = z.object({
  params: z.object({
    id: z.string().min(1, "Job ID is required"),
  }),

  body: z
    .object({
      title: z.string().trim().min(3).optional(),

      company: z.string().trim().min(2).optional(),

      location: z.string().trim().min(2).optional(),

      salary: z.number().positive().optional(),

      category: z.enum(["frontend", "backend", "fullstack"]).optional(),

      description: z.string().trim().min(10).optional(),
    })
    .refine(
      (body) => Object.keys(body).length > 0,
      "At least one field must be provided",
    ),
});
