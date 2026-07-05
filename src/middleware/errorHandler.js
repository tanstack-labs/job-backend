export const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    status: err.status || "error",
    message: err.message || "Internal Server Error",
    errors: err.errors ?? null,
  });
};
