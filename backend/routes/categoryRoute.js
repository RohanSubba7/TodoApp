const express = require("express");
const {
  demoFunction,
  postTask,
  taskList,
  taskDetails,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const { taskValidation } = require("../validation");
const router = express.Router();

router.get("/welcome", demoFunction);
router.post("/posttask", postTask);
router.get("/tasklist", taskList);
router.get("/taskdetails/:id", taskDetails);
router.put("/updatetask/:id", updateTask);
router.delete("/deletetask/:id", deleteTask);

module.exports = router;
