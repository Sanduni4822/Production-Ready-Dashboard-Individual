// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem('authToken');  // Check if the token exists in localStorage
  
  // Log to check if the token exists (for debugging purposes)
  console.log('PrivateRoute Check - IsAuthenticated:', isAuthenticated);

  // If the user is authenticated, allow access to the child routes
  // If not, redirect to the login page
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
