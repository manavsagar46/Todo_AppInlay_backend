import Task from "../models/Task.js";

// adding tasks
export const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();

    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// filtering tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find(req.query);
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// update task
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete task
export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({
      message: "Task is deleted",
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
