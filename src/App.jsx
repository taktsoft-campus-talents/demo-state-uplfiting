import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  function increase() {
    setCounter((previous) => previous + 1);
  }
  function decrease() {
    setCounter((previous) => previous - 1);
  }
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li className="count-display">Count: {counter}</li>
        </ul>
      </nav>
      <h1>Demo</h1>
      <Counter counter={counter} onIncrease={increase} onDecrease={decrease} />
    </>
  );
}

export default App;
