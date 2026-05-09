import React, { useEffect, useState } from "react";
import ToDoHeader from "./ToDoHeader";
import Stats from "./Stats";
import FilterButtons from "./FilterButtons";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import axios from "axios";

import {
  fetchTaskAPI,
  createTaskAPI,
  updateTaskAPI,
  deleteTaskAPI,
} from "../Helpers/TaskAPIHelper";
function Todo() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [newModel, setNewModel] = useState({ title: "", description: "" });
  const [editTask, setEditTask] = useState(null);
  const [updateTast, setUpdateTask] = useState(null);
  const [deleteTask, setDeleteTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");
  const [showForm, setShowForm] = useState(false);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await fetchTaskAPI();
      setTasks(data);
    } catch (error) {
      console.log("Error fetching", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  const createTask = async () => {
    try {
      const data = await createTaskAPI(newModel); // ✅ send form values
      setTasks([...tasks, data?.task]);
      setNewModel({ title: "", description: "" });
      setShowForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  const updateTask = async (id, updates) => {
    try {
      const updatedTask = await updateTaskAPI(id, updates);

      setTasks(tasks.map((t) => (t._id === id ? updatedTask : t)));

      setEditTask(null);
    } catch (err) {
      console.log(err);
    }
  };

  const toDeleteTask = async (id) => {
    try {
      const response = await deleteTaskAPI(id);
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (!task) return false;

    if (filter === "all") return true;

    return task.status === filter;
  });

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === "completed").length,
    pending: tasks.filter((t) => t.status === "pending").length,
    progress: tasks.filter((t) => t.status === "progress").length,
  };
  const showActions = filter !== "all";
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <ToDoHeader username={user?.name}/>
      <div className="max-w-2xl mx-auto">
        <Stats {...stats} />
        <div className="flex justify-end mt-1 mb-2">
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            + Add Task
          </button>
        </div>
        <FilterButtons filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          loading={loading}
          editTask={editTask}
          setEditingTask={setEditTask}
          updateTask={updateTask}
          deleteTask={toDeleteTask}
          showActions={showActions}
        />
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur[10px] flex items-center justify-center z-50">
          <div className="w-full max-w-xl px-8">
            <TaskForm
              onCancel={() => setShowForm(false)}
              createTask={createTask} // ✅ FIX
              newModel={newModel} // optional
              setNewModel={setNewModel} // optional
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Todo;
