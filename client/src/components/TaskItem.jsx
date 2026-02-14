export default function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <span>{task.title}</span>
      <div className="buttonContainer">
        <button
          className={task.completed ? "undo" : "complete"}
          onClick={() => onToggle(task._id, task.completed)}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button className="delete" onClick={() => onDelete(task._id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
