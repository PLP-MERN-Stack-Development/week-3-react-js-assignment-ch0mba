import { useState, useEffect } from "react";

export default function ApiTaskList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async (pageNum) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${pageNum}`
      );
      if (!res.ok) throw new Error("Failed to fetch tasks");

      const data = await res.json();

      if (data.length === 0) setHasMore(false);

      setItems((prev) => [...prev, ...data]);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 500 &&
        !loading &&
        hasMore
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">External Tasks (API)</h2>

      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-4 w-full rounded-md"
      />

      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="space-y-2">
        {filteredItems.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow-sm">
            <h3 className={`font-medium ${item.completed ? "line-through text-gray-500" : ""}`}>
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">
              ID: {item.id} | Completed: {item.completed ? "Yes" : "No"}
            </p>
          </div>
        ))}
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {!hasMore && <p className="text-center">No more tasks to load.</p>}
    </div>
  );
}