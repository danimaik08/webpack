import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div data-testid="App">
      <Outlet />
      <div>
        <div>
          <Link to="/about">about</Link>
        </div>
        <div>
          <Link to="/shop">shop</Link>
        </div>
      </div>
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
