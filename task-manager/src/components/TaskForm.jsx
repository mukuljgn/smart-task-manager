import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({
      id: Date.now(),
      title,
      priority,
      completed: false,
    });

    setTitle("");
  };

  return (
    <form onSubmit={submitHandler} className="mb-6 space-y-3">
      <input
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="What do you want to work on?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="flex gap-3">
        <select
          className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button className="bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-700 hover:to-sky-600 transition text-white px-5 rounded-lg font-medium shadow-md">
          Add Task
        </button>
      </div>
    </form>
  );
}
