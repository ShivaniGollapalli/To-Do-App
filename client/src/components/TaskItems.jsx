import React from "react";
import TaskEdit from "./TaskEdit";
import StatusBadge from "./StatusBadge";
import {
  Check,
  Edit2,
  Trash2,
  Clock,
  Loader2,
  CircleDashed,
} from "lucide-react";

function TaskItems({
  task,
  editTask,
  setEditingTask,
  updateTask,
  deleteTask,
  showActions,
}) {
  const taskComplete = task.status === "completed";
  return (
    <div
      className={`bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 transition duration-200 hover:shadow-xl hover:border-gray-600 ${
        task.completed ? "opacity-70" : ""
      }`}
    >
      {editTask === task._id ? (
        <TaskEdit
          task={task}
          onSave={(updates) => updateTask(task._id, updates)}
          onCancel={() => setEditingTask(null)}
        />
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex items-start space-x-3 flex-1">
            <button
              className={`mt-1 w-6 h-6 rounded-full border flex items-center justify-center transition
    ${
      task.status === "pending"
        ? "border-yellow-400 bg-yellow-600/30"
        : task.status === "progress"
        ? "border-blue-400 bg-blue-600/30"
        : task.status === "completed"
        ? "border-green-500 bg-green-500/20"
        : "border-gray-500"
    }
  `}
            >
              {task.status === "pending" && (
                <Clock size={14} className="text-yellow-500" />
              )}

              {task.status === "progress" && (
                <Loader2 size={14} className="text-blue-500 animate-spin" />
              )}

              {task.status === "completed" && (
                <Check size={14} className="text-green-500" />
              )}
            </button>

            <div className="flex-1">
              <h3
                className={`text-lg font-medium ${
                  task.completed ? "text-gray-400 inline-through" : "text-white"
                }`}
              >
                {task.title}
              </h3>
              {task.description && (
                <p
                  className={`mt-1 ${
                    task.completed ? "text-gray-500" : "text-gray-300"
                  }`}
                >
                  {task.description}
                </p>
              )}
              <p className="text-sm text-gray-500 mt-2">
                Created:
                {new Date(task.creataedAt).toLocaleDateString()}{" "}
                {task.updatedAt !== task.creataedAt && (
                  <span>
                    {" "}
                    Update: {new Date(task.updatedAt).toLocaleDateString()}
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 ml-4">
            {showActions && !taskComplete ? (
              <div>
                <button
                  onClick={() => setEditingTask(task._id)}
                  className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition duration-200"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition duration-200"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ) : (
              <StatusBadge status={task.status} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskItems;
