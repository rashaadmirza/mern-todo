import { useEffect, useState } from "react";
import {fetchTasks, addTask, deleteTask, toggleComplete} from "./api/tasks";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]); // Stores all tasks

  // Load all tasks from backend
  const loadTasks = async () => {
    try {
      const data = await fetchTasks(); // Call API
      setTasks([...data].reverse()); // newest first
    } catch (error) {
      console.log("Error fetching tasks:", error);
    }
  };
  
  // Load tasks on component mount
  useEffect(() => {
    loadTasks();
  }, []);

  // Add a new task
  const handleAdd = async (title) => {
    try {
      await addTask(title); // Call API to add task
      loadTasks(); // Refresh tasks list
    } catch (error) {
      console.log("Error adding task:", error);
    }
  };
  
  // Delete a task
  const handleDelete = async (id) => {
    try {
      await deleteTask(id); // Call API to delete
      loadTasks(); // Refresh tasks list
    } catch (error) {
      console.log("Error deleting task:", error);
    }
  };

  // Toggle completed status
  const handleToggle = async (id, completed) => {
    try {
      await toggleComplete(id, completed); // Call API to toggle
      loadTasks(); // Refresh tasks list
    } catch (error) {
      console.log("Error toggling task:", error);
    }
  };

  // Render
  return (
    <div className="container">

      <div className="subContainer header">
        <h1>mern-todo</h1>
      </div>

      <div className="subContainer">
        {/* Add Task Form */}
        <AddTaskForm onAdd={handleAdd} />
      </div>

      <div className="subContainer listContainer">
        {/* Task List */}
        <TaskList
          tasks={tasks}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      </div>
    </div>
  );
}

export default App;

// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla illum fugit veritatis a nisi nostrum? Totam dolor tenetur commodi eveniet laborum esse in labore, cumque atque. Quidem fugiat harum dignissimos.