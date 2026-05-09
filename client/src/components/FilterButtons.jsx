import React from "react";

function FilterButtons({ filter, setFilter }) {
  const filters = ["all", "pending", "completed", "progress"];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      {filters.map((type) => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-3 py-2 rounded-lg text-xs sm:text-sm transition duration-200 ${
            filter === type
              ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
              : "bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600"
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
