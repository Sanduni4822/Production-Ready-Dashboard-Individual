// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';  // Login page component
import Layout from './components/Layout/Layout';  // Layout component (Sidebar + Navbar)
import Dashboard from './pages/Dashboard/Dashboard';  // Dashboard page component
import PrivateRoute from './components/PrivateRoute';  // Protected route for authentication

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route for Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            {/* Dashboard Route */}
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add more protected routes like /profile and /settings here */}
          </Route>
        </Route>

        {/* Redirect to Login if no route is matched */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
