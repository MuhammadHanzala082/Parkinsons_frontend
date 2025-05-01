import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold no-underline hover:text-gray-200">
          Parkinson's Detection
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="text-white no-underline hover:text-gray-200 transition-colors duration-200">
            Home
          </Link>
          <Link to="/upload" className="text-white no-underline hover:text-gray-200 transition-colors duration-200">
            Upload
          </Link>
          <Link to="/results" className="text-white no-underline hover:text-gray-200 transition-colors duration-200">
            Results
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 