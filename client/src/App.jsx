// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
import Login from './pages/Login/Login';         // Import Login component
// import Dashboard from './pages/Dashboard/Dashboard';  // Import Dashboard component
// import Profile from './pages/Profile/Profile';       // Import Profile component
// import Settings from './pages/Settings/Settings';    // Import Settings component
// import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute to protect routes

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route for Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes for Dashboard, Profile, and Settings */}
        {/* <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} /> */}

        {/* Redirect to Login if no route is matched */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
