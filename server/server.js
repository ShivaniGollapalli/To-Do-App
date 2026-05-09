import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/mongo.js";
import taskRouter from "./routes/taskRouter.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();
const allowedOrigins = ["http://localhost:5173",'https://to-do-app-eta-five.vercel.app'];
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());
app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use("/task", taskRouter);
app.listen(port, () => {
  console.log(`🚀 Server is running on ${port}`);
});
