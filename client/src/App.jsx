// src/App.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <meta
            name="description"
            content="A professional dashboard for managing your account, profile, and settings."
          />
        </Helmet>
        <AppRoutes />
      </Router>
    </UserProvider>
  );
};

export default App;
