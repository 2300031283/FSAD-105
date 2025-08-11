import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>WELCOME TO CICD</h1>
        <p>Current count: {count}</p>
        <div>
          <button onClick={increment}>+</button>
          <button onClick={decrement} disabled={count === 0}>
            -
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
