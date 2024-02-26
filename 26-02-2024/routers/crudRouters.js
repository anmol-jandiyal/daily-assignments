const express = require("express");
const taskOperations = require("../controllers/taskOperations");

const router = express.Router();

router.post("/", taskOperations.createValidator, taskOperations.createTask);

router.get("/", taskOperations.getAllTasks);
router.get("/:id", taskOperations.getTask);

router.put("/:id", taskOperations.replaceValidator, taskOperations.replaceTask);
router.patch("/:id", taskOperations.updateTask);

router.delete("/:id", taskOperations.deleteTask);

module.exports = { router };
