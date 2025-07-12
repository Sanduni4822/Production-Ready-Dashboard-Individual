// src/components/Sidebar/Sidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";  // Import Link for routing

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`bg-gray-800 text-white ${isOpen ? "w-64" : "w-20"} transition-all duration-300 ease-in-out fixed top-0 left-0 h-full z-10`}
    >
      <div className="flex justify-between p-4">
        <button onClick={toggleSidebar} className="text-white lg:hidden">
          <i className={`fa ${isOpen ? 'fa-chevron-left' : 'fa-chevron-right'} text-2xl`}></i>
        </button>
        {isOpen && <span className="text-2xl font-bold">Dashboard</span>}
      </div>
      <nav className="mt-10">
        <ul>
          <li>
            <Link 
              to="/dashboard" 
              className={`block py-2 px-4 hover:bg-gray-700`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/profile" 
              className={`block py-2 px-4 hover:bg-gray-700`}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link 
              to="/settings" 
              className={`block py-2 px-4 hover:bg-gray-700`}
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
