import { useState } from "react";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import TaskFilter from "@/components/TaskFilter";
import ApiTaskList from "@/components/ApiTaskList";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "@/components/ThemeToggle";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // 'all', 'active', 'completed'

  const addTask = (task) => {
    setTasks((prevTasks) => [
      { ...task, completed: false },
      ...prevTasks,
    ]);
  };

  const toggleTaskCompletion = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  let filteredTasks = [];
  if (filter === "all") {
    filteredTasks = tasks;
  } else if (filter === "active") {
    filteredTasks = tasks.filter((task) => !task.completed);
  } else if (filter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Task Manager</h1>

       < ThemeToggle />

      <TaskForm onAdd={addTask} />
      
      <TaskFilter filter={filter} setFilter={setFilter} />

      <TaskList
        tasks={filteredTasks}
        onToggleCompleted={toggleTaskCompletion}
        onDelete={deleteTask}
      />

      <ApiTaskList />
     
    </div>
  );
}