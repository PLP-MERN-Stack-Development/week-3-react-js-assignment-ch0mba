// src/components/TaskList.jsx
import TaskItem from "@/components/TaskItem";

export default function TaskList({ tasks, onToggleCompleted, onDelete }) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No tasks available. Please add a task.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          onToggleCompleted={onToggleCompleted}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}