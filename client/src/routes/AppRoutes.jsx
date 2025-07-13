// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Profile from '../pages/Profile/Profile';
import Settings from '../pages/Settings/Settings';
import Layout from '../components/Layout/Layout';
import PrivateRoute from '../components/PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<Login />} />

      {/* Protected routes inside layout */}
      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>
          <Route
            path="/dashboard"
            element={
              <>
                <Helmet>
                  <title>Dashboard</title>
                  <meta
                    name="description"
                    content="View your account statistics and activity."
                  />
                </Helmet>
                <Dashboard />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Helmet>
                  <title>Profile</title>
                  <meta
                    name="description"
                    content="Manage and view your account profile."
                  />
                </Helmet>
                <Profile />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <Helmet>
                  <title>Settings</title>
                  <meta
                    name="description"
                    content="Edit your account settings including name and email."
                  />
                </Helmet>
                <Settings />
              </>
            }
          />
        </Route>
      </Route>

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
