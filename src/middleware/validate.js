import { handleZodError } from "../errors/handleZodError.js";

export const validate = (schema) => {
  return (req, res, next) => {
    const parsed = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    if (!parsed.success) {
      return next(handleZodError(parsed.error));
    }

    req.validated = parsed.data;

    next();
  };
};
