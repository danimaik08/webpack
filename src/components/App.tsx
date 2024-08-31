import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div data-testid="App">
      <h1 style={{ color: '#00f' }}>React</h1>
      <div style={{ display: 'flex', gap: 8 }}>
        <div>Counter: {count}</div>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
