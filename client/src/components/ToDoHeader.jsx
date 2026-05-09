import React, { useState } from "react";
function ToDoHeader({ username, onLogout }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 rounded-xl">
      <div className="flex-1 text-center">
        <h3 className="text-white text-2xl font-bold">To-Do List</h3>
        <p className="text-gray-300 text-sm">
          Stay organized and get things done!
        </p>
      </div>

    </div>
  );
}

export default ToDoHeader;
