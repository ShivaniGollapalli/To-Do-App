import express from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskControllers.js";

const taskRouter = express.Router();

taskRouter.post("/createTask", createTask);
taskRouter.get("/getAllTasks", getTasks);
taskRouter.get("/getAllTasks/:id", getTaskById);
taskRouter.patch("/updateTask/:id", updateTask);
taskRouter.delete("/deleteTask/:id", deleteTask);

export default taskRouter;
