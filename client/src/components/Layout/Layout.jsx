// src/components/Layout/Layout.jsx
import React from "react";
import Sidebar from "../Sidebar/Sidebar";  // Import Sidebar
import Navbar from "../Navbar/Navbar";    // Import Navbar

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      <div className="flex-1">
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
