// src/components/ComplexCounter.tsx
import React, { useReducer } from 'react';

// 1. Define the shape of our state
interface CounterState {
  count: number;
  step: number;
}

// 2. Define the shape of our actions using a discriminated union
type CounterAction =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'set_step'; payload: number };

// 3. Define the initial state
const initialState: CounterState = {
  count: 0,
  step: 1,
};

// 4. Create the reducer function
const reducer = (state: CounterState, action: CounterAction): CounterState => {
  console.log('Reducer called with state:', state, 'and action:', action);

  switch (action.type) {
    case 'increment':
      // Always return a new state object
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'set_step':
      // The payload comes from the action
      return { ...state, step: action.payload };
    case 'reset':
      return initialState;
    default:
      // A good practice for exhaustiveness checking with TypeScript
      const _exhaustiveCheck: never = action;
      return state;
  }
};

const ComplexCounter: React.FC = () => {
  // 5. Use the useReducer hook in our component
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ border: '1px solid magenta', padding: '15px', margin: '15px 0' }}>
      <h4>Complex Counter with useReducer</h4>
      <p>Count: <strong>{state.count}</strong></p>
      <p>Step: <strong>{state.step}</strong></p>

      <div>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })} style={{ margin: '0 10px' }}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>

      <div style={{ marginTop: '10px' }}>
        <label htmlFor="stepInput">Set Step: </label>
        <input
          id="stepInput"
          type="number"
          value={state.step}
          onChange={(e) => dispatch({ type: 'set_step', payload: Number(e.target.value) })}
        />
      </div>
    </div>
  );
};

export default ComplexCounter;
