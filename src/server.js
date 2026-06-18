import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/db.js";
//import { seedJobs } from "./utils/seed.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  //await seedJobs();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();
