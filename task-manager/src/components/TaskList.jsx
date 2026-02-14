import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0)
    return (
      <div className="text-center text-sky-500 py-6 font-medium">
        ✨ You’re all caught up! Add something new.
      </div>
    );

  return (
    <div className="space-y-3 max-h-80 overflow-y-auto pr-1 scrollbar-thin">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}
