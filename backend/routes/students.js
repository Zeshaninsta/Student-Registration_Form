const express = require('express');
const router = express.Router();
const Student = require('../Models/Student'); // Adjust the path if necessary



router.post('/', (req, res) => {
  try {
    return res.status(200).json({ message: "Welcome to the Student Registration Form" });
  } catch (error) {
    // Handle any potential errors
    return res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

// Route to register a new student
router.post('/register', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: "Student registered successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get a student by ID
router.get('/students/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    console.error("Error fetching student:", error); // Log the error
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Route to get all registered students
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error("Error fetching students:", error); // Log the error
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Route to update a student's information by ID
router.put('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student updated successfully', student });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to delete a student by ID
router.delete('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error("Error deleting student:", error); // Log the error
    res.status(500).json({ message: 'Failed to delete student', error: error.message });
  }
});

module.exports = router;
