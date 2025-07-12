// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem('authToken');  // Check if the token exists in localStorage

  console.log('PrivateRoute Check - IsAuthenticated:', isAuthenticated);  // Log to check if token exists

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;  // Render children or redirect to login if not authenticated
};

export default PrivateRoute;
