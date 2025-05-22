// src/components/Counter.tsx
import React from 'react';

interface CounterProps {
  count: number;
  onIncrement: () => void; // A function that takes no arguments and returns nothing
  onDecrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <h3>Counter</h3>
      <p>Current count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement} style={{ marginLeft: '8px' }}>Decrement</button>
    </div>
  );
};

export default Counter;
