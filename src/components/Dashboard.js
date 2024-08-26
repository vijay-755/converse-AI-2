// src/components/Dashboard.js
import React, { useContext } from 'react';
import { StockContext } from '../context/StockContext';

const Dashboard = () => {
  const { holdings } = useContext(StockContext);

  return (
    <div>
      <h2>Your Holdings</h2>
      {holdings.length === 0 ? (
        <p>No holdings to display.</p>
      ) : (
        <ul>
          {holdings.map(holding => (
            <li key={holding.symbol}>
              {holding.name} ({holding.symbol}) - {holding.quantity} shares
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
