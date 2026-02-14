import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete, onToggle }) {
  if (tasks.length === 0) {
    return <p className="emptyMessage">No tasks yet. Add one above.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
