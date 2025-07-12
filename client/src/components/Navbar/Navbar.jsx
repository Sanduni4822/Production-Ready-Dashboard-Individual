import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { useUser, defaultUser } from '../../context/UserContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setUser(defaultUser);
    navigate('/login'); // navigate instead of reload
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center relative" aria-label="Main navigation">
      {/* Welcome message on left side */}
      <div className="text-2xl font-semibold">
      </div>

      {/* Hamburger for mobile */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {/* Desktop logout button, unchanged location */}
      <div className="hidden lg:block">
        <Button label="Log Out" onClick={handleLogout} />
      </div>

      {/* Mobile menu with logout button, unchanged */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-800 text-white p-4 z-50">
          <Button label="Log Out" onClick={handleLogout} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
