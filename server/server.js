const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(cors());
app.use(express.json());

const Task = require("./models/Task");

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Server is running");
});

// CREATE TASK
app.post("/tasks", async (req, res) => {
  try {
    const task = new Task({ title: req.body.title, completed: req.body.completed });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET ALL TASKS
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find(); // fetch all tasks from MongoDB
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE TASK (mark as completed)
app.put("/tasks/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { completed: true },
      { new: true }
    );

    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE by PATCH
app.patch("/tasks/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,          // dynamically update whatever is sent
      { new: true }
    );

    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE TASK
app.delete("/tasks/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
