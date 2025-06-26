export default function TaskFilter({ filter, setFilter }) {
  return (
    <div className="flex space-x-2 mb-4">
      <button
        className={`px-4 py-2 rounded-md ${
          filter === "all"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`px-4 py-2 rounded-md ${
          filter === "active"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        className={`px-4 py-2 rounded-md ${
          filter === "completed"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}