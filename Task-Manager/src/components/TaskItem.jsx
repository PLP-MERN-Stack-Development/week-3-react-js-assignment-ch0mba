import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TaskItem({ task, index, onToggleCompleted, onDelete }) {
  return (
    <Card className="p-4 flex justify-between items-start">
      <div>
        <h2 className={`font-semibold ${task.completed ? "line-through text-gray-500" : ""} dark:text-white`}>
          {task.task}
        </h2>
        <p className="text-sm text-gray-500">{task.description}</p>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onToggleCompleted(index)}
      >
        {task.completed ? "Mark as Incomplete" : "Mark as Completed"}
      </Button>

      <Button
        variant="destructive"
        onClick={() => onDelete(index)}
      >
        Delete
      </Button>
    </Card>
  );
}