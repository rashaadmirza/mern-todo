import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

// Fetch all tasks
export const fetchTasks = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Add a new task
export const addTask = async (title) => {
  const res = await axios.post(API_URL, { title });
  return res.data;
};

// Delete a task
export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

// Toggle complete
export const toggleComplete = async (id, completed) => {
  const res = await axios.patch(`${API_URL}/${id}`, { completed: !completed });
  return res.data;
};
