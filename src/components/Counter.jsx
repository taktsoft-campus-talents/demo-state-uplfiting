import "./Counter.css";

export default function Counter({ counter, onDecrease, onIncrease }) {
  return (
    <div className="counter-container">
      <button onClick={onDecrease}>-</button>
      <h2> {counter}</h2>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}
