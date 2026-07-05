import AppError from "../utils/AppError.js";

export const handleZodError = (error) => {
  const errors = error.issues.map((issue) => ({
    field: issue.path.join("."),
    message: issue.message,
  }));

  return new AppError("Validation failed", 400, errors);
};
