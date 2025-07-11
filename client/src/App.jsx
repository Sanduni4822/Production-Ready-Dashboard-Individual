import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
import Login from './pages/Login/Login';         // Import Login component
import Layout from './components/Layout/Layout';  // Import Layout component (Sidebar + Navbar)
// import Dashboard from './pages/Dashboard/Dashboard';  // Import Dashboard component
// import Profile from './pages/Profile/Profile';       // Import Profile component
// import Settings from './pages/Settings/Settings';    // Import Settings component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route for Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes wrapped in Layout for Sidebar and Navbar */}
        <Route path="/" element={<Layout />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} /> */}
        </Route>

        {/* Redirect to Login if no route is matched */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
