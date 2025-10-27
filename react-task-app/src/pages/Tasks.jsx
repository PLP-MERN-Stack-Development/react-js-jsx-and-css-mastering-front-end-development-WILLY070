import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Button from "../components/Button";

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const filtered = tasks.filter((t) =>
    filter === "All" ? true : filter === "Active" ? !t.completed : t.completed
  );

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          className="border p-2 rounded w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new task..."
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex gap-2">
        {["All", "Active", "Completed"].map((f) => (
          <Button
            key={f}
            variant={filter === f ? "primary" : "secondary"}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>

      <ul className="space-y-2">
        {filtered.map((task) => (
          <li key={task.id} className="flex justify-between p-2 border rounded">
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer ${task.completed ? "line-through" : ""}`}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
