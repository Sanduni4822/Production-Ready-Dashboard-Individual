// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-semibold">Dashboard</div>
      <div className="lg:hidden">
        <button 
          onClick={toggleMenu} 
          className="text-white focus:outline-none">
          <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>
      <div className="hidden lg:block">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Log Out
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-800 text-white p-4">
          <button className="w-full bg-blue-600 text-white py-2 rounded-md">
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
