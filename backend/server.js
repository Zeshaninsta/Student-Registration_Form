const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: ["https://srf-portal.onrender.com"], // Allowed origin
  methods: ["GET", "POST", "PUT", "DELETE"],  // Allowed HTTP methods
  allowedHeaders: ["Content-Type"],            // Allowed headers
}));

app.use(express.json()); // Middleware for parsing JSON bodies

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

// Define student routes
const studentRoutes = require('./routes/students');

// Use student routes
app.use('/api', studentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
