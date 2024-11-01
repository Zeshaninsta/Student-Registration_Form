// src/Components/HomePage/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center md:min-h-screen text-center p-10 rounded-lg w-full md:max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Student Registration Portal</h1>
      <p className="text-sm md:text-md text-gray-600 mb-8 leading-relaxed">
        This project is a Full Stack Developer challenge by Qamer Software Technology. 
        We are tasked with building a Student Registration website using the MERN stack (MongoDB, Express, React, Node.js).
        The site will include essential features such as a student registration form and a registered student list, complete with CRUD operations.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
        <Link
          to="/register"
          className="w-full sm:w-auto px-6 py-3 text-gray-50 bg-gray-800 font-medium rounded-lg shadow hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Register a Student
        </Link>
        <Link
          to="/students"
          className="w-full sm:w-auto px-6 py-3 text-gray-50 bg-gray-600 font-medium rounded-lg shadow hover:bg-gray-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          View Student List
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
