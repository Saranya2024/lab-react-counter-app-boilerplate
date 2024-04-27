import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="counter">{counter}</div>
      <div className="buttons">
        <button onClick={increaseCounter}>+</button>
        <button onClick={decreaseCounter}>-</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
}

export default App;
