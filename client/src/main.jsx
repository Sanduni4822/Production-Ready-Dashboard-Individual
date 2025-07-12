import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';  // Import your global CSS
import App from './App.jsx';    // Import the App component

// React 18's createRoot to ensure proper behavior with concurrent rendering
const root = createRoot(document.getElementById('root'));

// Render the App wrapped in StrictMode for highlighting potential problems
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
