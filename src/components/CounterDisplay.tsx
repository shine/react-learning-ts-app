import React from 'react';
import { useCounterStore } from '../stores/counterStore';

const CounterDisplay: React.FC = () => {
  // This component only cares about the count. It will only re-render when 'count' changes.
  const count = useCounterStore((state) => state.count);

  return <h2>Global Count: {count}</h2>;
};

export default CounterDisplay;
