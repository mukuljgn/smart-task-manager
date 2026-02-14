import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks, saveTasks } from "./utils/storage";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-sky-100 to-emerald-100 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-2xl w-full max-w-lg border border-white/40">
        {/* Header */}
        <div className="rounded-t-2xl bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-5 text-white">
          <h1 className="text-2xl font-semibold">Smart Task Manager</h1>
          <p className="text-sm text-indigo-100">Plan smart. Execute better.</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <TaskForm addTask={addTask} />
          <TaskList
            tasks={tasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}
