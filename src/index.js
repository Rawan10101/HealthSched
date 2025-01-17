import React from 'react';
import ReactDOM from 'react-dom/client';  // Import the new client from ReactDOM
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import App from './App';
import './index.css';

// Use createRoot instead of render in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));  // Create the root element
root.render(
  <BrowserRouter>  {/* Wrap your App in BrowserRouter for routing */}
    <App />
  </BrowserRouter>
);
