const express = require("express");
const {
  createTask,
  getAllTasks,
  getSingleTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");
const router = express.Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", getSingleTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

module.exports = router;
