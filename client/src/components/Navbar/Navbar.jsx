import React, { useState } from 'react';
import Button from '../Button/Button';
import { useUser } from '../../context/UserContext';  // Context hook import

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = useUser();  // Get user data and setter from context

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Logout function clears user context and localStorage, redirects to login
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // If you store token here
    setUser({
      name: '',
      email: '',
      profilePicture: 'https://www.w3schools.com/w3images/avatar2.png',
      posts: 0,
      comments: 0,
      totalUsers: 0,
    });
    window.location.href = '/login';  // Redirect to login page
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center relative">
      {/* Show welcome message with user name, fallback to Guest */}
      <div className="text-2xl font-semibold">
        Welcome, {user.name || 'Guest'}
      </div>

      {/* Hamburger button for mobile */}
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

      {/* Desktop logout button */}
      <div className="hidden lg:block">
        <Button label="Log Out" onClick={handleLogout} />
      </div>

      {/* Mobile menu with logout button */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-800 text-white p-4 z-50">
          <Button label="Log Out" onClick={handleLogout} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

