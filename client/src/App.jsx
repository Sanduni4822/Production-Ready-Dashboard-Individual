import React from 'react';
import { Helmet } from 'react-helmet'; // Importing react-helmet for SEO
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';  // Login page component
import Layout from './components/Layout/Layout';  // Layout component (Sidebar + Navbar)
import Dashboard from './pages/Dashboard/Dashboard';  // Dashboard page component
import Profile from './pages/Profile/Profile';  // Profile page component
import Settings from './pages/Settings/Settings';  // Settings page component
import PrivateRoute from './components/PrivateRoute';  // Protected route for authentication
import { UserProvider } from './context/UserContext'; // Import the UserProvider

const App = () => {
  return (
    <UserProvider>
      <Router>
        {/* Global SEO meta tags */}
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <meta name="description" content="A professional dashboard for managing your account, profile, and settings." />
        </Helmet>

        <Routes>
          {/* Public Route for Login */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
              {/* Dashboard Route */}
              <Route
                path="/dashboard"
                element={
                  <>
                    <Helmet>
                      <title>Dashboard</title>
                      <meta name="description" content="View your account statistics and activity." />
                    </Helmet>
                    <Dashboard />
                  </>
                }
              />
              {/* Profile Route */}
              <Route
                path="/profile"
                element={
                  <>
                    <Helmet>
                      <title>Profile</title>
                      <meta name="description" content="Manage and view your account profile." />
                    </Helmet>
                    <Profile />
                  </>
                }
              />
              {/* Settings Route */}
              <Route
                path="/settings"
                element={
                  <>
                    <Helmet>
                      <title>Settings</title>
                      <meta name="description" content="Edit your account settings including name and email." />
                    </Helmet>
                    <Settings />
                  </>
                }
              />
            </Route>
          </Route>

          {/* Redirect to Login if no route is matched */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
