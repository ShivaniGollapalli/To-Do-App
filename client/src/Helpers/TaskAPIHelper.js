import axios from "axios";
import { toast } from "react-toastify";

// Get logged-in user info
export const getUserInfo = async () => {
  try {
    const response = await axios.get("/auth/getUser", {
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    console.error("Error fetching user info:", error);
    return { status: false, message: error.message };
  }
};

// Fetch all tasks for the logged-in user
export const fetchTaskAPI = async () => {
  try {
    const response = await axios.get("/task/getAllTasks", {
      withCredentials: true,
    });
    return response?.data?.tasks || [];
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};

// Fetch a single task by ID
export const fetchTaskByIdAPI = async (id) => {
  try {
    const response = await axios.get(`/task/getAllTasks/${id}`, {
      withCredentials: true,
    });
    return response?.data?.task || null;
  } catch (error) {
    console.error("Error fetching task by ID:", error);
    return null;
  }
};

// Create a new task
export const createTaskAPI = async (task) => {
  try {
    const payload = {
      title: task.title,
      desc: task.description, // Backend expects "desc"
      status: "pending", // Backend requires "status"
    };

    const response = await axios.post("/task/createTask", payload, {
      withCredentials: true,
    });
    const { status, message } = response.data;

    // SHOW TOASTS
    status ? toast.success(message) : toast.error(message);
    return response?.data; // return actual task object
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong");
    return { status: false };
  }
};

// Update an existing task
export const updateTaskAPI = async (id, task) => {
  try {
    const response = await axios.patch(`/task/updateTask/${id}`, task, {
      withCredentials: true,
    });
    return response?.data?.task;
  } catch (error) {
    console.error("Error updating task:", error);
    return { status: false, message: error.message };
  }
};

// Delete a task by ID
export const deleteTaskAPI = async (id) => {
  try {
    const response = await axios.delete(`/task/deleteTask/${id}`, {
      withCredentials: true,
    });
    return response?.data;
  } catch (error) {
    console.error("Error deleting task:", error);
    return { status: false, message: error.message };
  }
};
