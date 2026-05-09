import React from "react";

function Stats({ total, completed, pending, progress }) {
  return (
    <div className="w-full flex justify-center mt-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-2xl w-full">
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 text-center">
          <div className="text-1xl font-bold text-blue-400">{total}</div>
          <div className="text-gray-300">Tasks</div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 text-center">
          <div className="text-1xl font-bold text-blue-400">{completed}</div>
          <div className="text-gray-300">Completed</div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 text-center">
          <div className="text-1xl font-bold text-blue-400">{pending}</div>
          <div className="text-gray-300">Pending</div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 text-center">
          <div className="text-1xl font-bold text-blue-400">{progress}</div>
          <div className="text-gray-300">In Progress</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
