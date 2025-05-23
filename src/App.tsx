// src/App.tsx
import React from 'react';
// ... other imports like Counter, DataFetcher etc.
import Greeting from './components/Greeting';
import DataFetcher from './components/DataFetcher';
import Counter from './components/Counter';
import './App.css';

function App() {
  const [currentCount, setCurrentCount] = React.useState<number>(0);

  const handleIncrementCount = () => {
    setCurrentCount(prevCount => prevCount + 1);
  };

  const handleDecrementCount = () => {
    setCurrentCount(prevCount => prevCount - 1);
  };

  const handleResetCount = () => {
    setCurrentCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My TypeScript React App</h1>
        <Greeting name="Developer" message="Learning about useEffect!" />

        <hr style={{ margin: '20px 0', width: '50%' }} /> 

        <Counter 
          count={currentCount} 
          onIncrement={handleIncrementCount}
          onDecrement={handleDecrementCount} 
        />
        <div style={{ marginTop: '10px', marginBottom: '20px' }}>
          <button onClick={handleResetCount}>Reset Count from App</button>
        </div>

        <hr style={{ margin: '20px 0', width: '50%' }} /> 

        {/* 2. Use the DataFetcher component */}
        <DataFetcher itemId={currentCount}/>
      </header>
    </div>
  );
}

export default App;
