import React from 'react';
import { useCounterStore } from '../stores/counterStore';

const CounterControls: React.FC = () => {
  // This component only cares about the actions. It will essentially never re-render
  // because the actions themselves are stable.
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  // Alternative way to select multiple items:
  // const { increment, decrement, reset } = useCounterStore();

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ margin: '0 10px' }}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterControls;
