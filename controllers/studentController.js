// Import required libraries
const db = require("../db");

// Get all students
exports.getAllStudents = (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(result);
    }
  });
};

// Get a student by ID
exports.getStudentById = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM students WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else if (result.length === 0) {
      res.status(404).json({ error: "Student not found" });
    } else {
      res.json(result[0]);
    }
  });
};

// Create a new student
exports.createStudent = (req, res) => {
  console.log("req.body", req.body);
  const { name, age, grade } = req.body;
  db.query(
    "INSERT INTO students (name, age, grade) VALUES (?, ?, ?)",
    [name, age, grade],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(201).json({ message: "Student created successfully" });
      }
    }
  );
};

// Update a student by ID
exports.updateStudent = (req, res) => {
  const id = req.params.id;
  const { name, age, grade } = req.body;
  db.query(
    "UPDATE students SET name = ?, age = ?, grade = ? WHERE id = ?",
    [name, age, grade, id],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ error: "Student not found" });
      } else {
        res.json({ message: "Student updated successfully" });
      }
    }
  );
};

// Delete a student by ID
exports.deleteStudent = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM students WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: "Student not found" });
    } else {
      res.json({ message: "Student deleted successfully" });
    }
  });
};
