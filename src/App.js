import React, { useState, useEffect } from 'react';
import './App.css'; // Add custom styles

function Counter() {
  // Get initial count from localStorage or default to 0
  const [count, setCount] = useState(() => {
    return parseInt(localStorage.getItem('count')) || 0;
  });

  // Save count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  // Increment function with an upper limit
  const increment = () => {
    if (count < 10) setCount(count + 1);
    else alert("You've reached the maximum limit (10).");
  };

  // Decrement function with a lower limit
  const decrement = () => {
    if (count > 0) setCount(count - 1);
    else alert("You've reached the minimum limit (0).");
  };

  // Reset function
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>🚀 Advanced Counter App</h1>
      <p
        className="counter-value"
        style={{
          color: count > 0 ? 'green' : count < 0 ? 'red' : 'white',
        }}
      >
        Current Count: {count}
      </p>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={reset}>🔄 Reset</button>
      <button onClick={increment}>➕ Increment</button>
    </div>
  );
}

export default Counter;
