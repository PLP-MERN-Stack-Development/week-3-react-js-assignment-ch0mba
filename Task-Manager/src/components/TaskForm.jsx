import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function TaskForm({ onAdd }) {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim() || !description.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    onAdd({
      task,
      description,
      completed: false,
    });

    // Reset form fields
    setTask("");
    setDescription("");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Task Name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
}