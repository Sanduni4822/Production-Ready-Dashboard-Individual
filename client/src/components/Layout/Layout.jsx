import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';  // Import Outlet to render child routes

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      
      <div className="flex-1 overflow-auto ml-64"> {/* Adjust the margin to allow space for the sidebar */}
        <Navbar />
        <main className="p-6">
          <Outlet />  {/* This will render the child route content, like Dashboard */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
