
import React, { createContext, useState, useEffect } from 'react';

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stocks, setStocks] = useState([]);
  const [holdings, setHoldings] = useState([]);


  useEffect(() => {
    const fetchStocks = async () => {
      try {
     
        const dummyData = [
          { symbol: 'AAPL', name: 'Apple Inc.', price: 150 },
          { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2800 },
        ];
        setStocks(dummyData);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }
    };

    fetchStocks();

   
    const intervalId = setInterval(fetchStocks, 5000); // Fetch every 5 seconds
    return () => clearInterval(intervalId);
  }, []);

  const buyStock = (symbol, quantity) => {
    const stock = stocks.find(stock => stock.symbol === symbol);
    if (stock) {
      setHoldings(prevHoldings => [
        ...prevHoldings,
        { ...stock, quantity }
      ]);
    }
  };

  const sellStock = (symbol, quantity) => {
    setHoldings(prevHoldings =>
      prevHoldings
        .map(holding => {
          if (holding.symbol === symbol) {
            return {
              ...holding,
              quantity: holding.quantity - quantity
            };
          }
          return holding;
        })
        .filter(holding => holding.quantity > 0)
    );
  };

  return (
    <StockContext.Provider value={{ stocks, holdings, buyStock, sellStock }}>
      {children}
    </StockContext.Provider>
  );
};
