import express from "express";
import cors from "cors";
import jobRoutes from "./routes/job.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/jobs", jobRoutes);

// health check
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;
