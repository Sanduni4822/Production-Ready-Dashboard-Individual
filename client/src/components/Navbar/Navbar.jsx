import React, { useState } from 'react';
import Button from '../Button/Button'; // Import Button component

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

      {/* Desktop version of the Log Out button */}
      <div className="hidden lg:block">
        <Button label="Log Out" onClick={() => console.log('Logged out')} />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-800 text-white p-4">
          {/* Only one Log Out button is included now, in the mobile menu */}
          <Button label="Log Out" onClick={() => console.log('Logged out')} />
        </div>
      )}
    </div>
  );
};

export default Navbar;

