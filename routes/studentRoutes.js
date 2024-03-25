// Import required libraries
const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

// Define routes
router.get("/getall", studentController.getAllStudents);
router.get("/get/:id", studentController.getStudentById);
router.post("/create", studentController.createStudent);
router.put("/update/:id", studentController.updateStudent);
router.delete("/delete/:id", studentController.deleteStudent);

// Export the router to be used in app.js
module.exports = router;
