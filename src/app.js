import express from "express";
import cors from "cors";
import jobRoutes from "./routes/job.routes.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoutes);

// No route matched
app.use(notFound);

// Error middleware
app.use(errorHandler);

// health check
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;
