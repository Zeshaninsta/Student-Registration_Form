import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-gray-800 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-md md:text-xl font-semibold">Student Registration</Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="flex items-center sm:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`hidden flex-col md:flex sm:flex-row sm:space-x-4 ${isOpen ? 'flex' : 'hidden'} sm:flex`}>
            <Link to="/" className="block px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white duration-200 rounded">Home</Link>
            <Link to="/register" className="block px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white duration-200 rounded">Register</Link>
            <Link to="/students" className="block px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white duration-200 rounded">Student List</Link>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white duration-200 rounded">Home</Link>
          <Link to="/register" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white duration-200 rounded">Register</Link>
          <Link to="/students" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white duration-200 rounded">Student List</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
