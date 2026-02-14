const priorityColors = {
  High: "bg-rose-100 text-rose-700 ring-1 ring-rose-200",
  Medium: "bg-amber-100 text-amber-700 ring-1 ring-amber-200",
  Low: "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200",
};

export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="flex justify-between items-center bg-gray-50 border rounded-xl p-3 hover:shadow transition">
      <div className="space-y-1">
        <p
          className={`font-medium ${
            task.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {task.title}
        </p>

        <span
          className={`text-xs px-2 py-1 rounded-full ${priorityColors[task.priority]}`}
        >
          {task.priority}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => toggleTask(task.id)}
          className="text-emerald-600 hover:bg-emerald-100 rounded-full p-2 transition"
        >
          ✓
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="text-rose-600 hover:bg-rose-100 rounded-full p-2 transition"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
