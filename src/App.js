// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Trade from './components/Trade';
import Dashboard from './components/Dashboard';
import { StockProvider } from './context/StockContext';

const App = () => {
  return (
    <StockProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Welcome to the Stock Market App</h1>} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </StockProvider>
  );
};

export default App;
