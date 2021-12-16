const Task = require("../models/taskModel");

exports.demoFunction = (req, res) => {
  res.send("this is accessed from the controller");
};

//to post task

exports.postTask = async (req, res) => {
  let task = new Task({
    task_name: req.body.task_name,
    status: req.body.status,
  });
  task = await task.save();

  if (!task) {
    return res.status(400).json({ error: "something went wrong" });
  }

  res.send(task);
};

// to show all task
exports.taskList = async (req, res) => {
  const task = await Task.find();
  if (!task) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.send(task);
};

//to show single task
exports.taskDetails = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.send(task);
};

//to update task
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
  if (!task) {
    return res.status(400).json({ error: "something went wrong" });
  }
  res.send(task);
};

//to delete task
exports.deleteTask = (req, res) => {
  Task.findByIdAndRemove(req.params.id)
    .then((task) => {
      if (!task) {
        return res.status(400).json({ error: "something went wrong" });
      } else {
        return res.status(200).json({ message: "task deleted" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ error: err });
    });
};
