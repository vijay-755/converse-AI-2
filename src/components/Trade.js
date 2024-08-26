// src/components/Trade.js
import React, { useContext, useState } from 'react';
import { StockContext } from '../context/StockContext';

const Trade = () => {
  const { stocks, buyStock, sellStock } = useContext(StockContext);
  const [selectedStock, setSelectedStock] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleBuy = () => {
    buyStock(selectedStock, parseInt(quantity));
  };

  const handleSell = () => {
    sellStock(selectedStock, parseInt(quantity));
  };

  return (
    <div>
      <h2>Trade Stocks</h2>
      <select value={selectedStock} onChange={(e) => setSelectedStock(e.target.value)}>
        <option value="" disabled>Select a Stock</option>
        {stocks.map(stock => (
          <option key={stock.symbol} value={stock.symbol}>
            {stock.name} ({stock.symbol})
          </option>
        ))}
      </select>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
      />
      <button onClick={handleBuy}>Buy</button>
      <button onClick={handleSell}>Sell</button>
    </div>
  );
};

export default Trade;
