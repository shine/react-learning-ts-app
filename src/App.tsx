// src/App.tsx
import React from 'react';
// ... other imports like Counter, DataFetcher etc.
import UserGreeting from './components/UserGreeting'; // 1. Import UserGreeting
import ProductList from './components/ProductList';
import NameForm from './components/NameForm';
import ThemedPanel from './components/ThemedPanel';
import ThemeToggleButton from './components/ThemeToggleButton';
import type { Product } from './components/ProductList';
import './App.css';

const sampleProducts: Product[] = [
  { id: 'p1', name: 'Laptop Pro', price: 1200, category: 'Electronics' },
  { id: 'p2', name: 'Coffee Maker Deluxe', price: 80, category: 'Appliances' },
  { id: 'p3', name: 'Wireless Headphones', price: 150, category: 'Electronics' },
  { id: 'p4', name: 'Running Shoes X', price: 100, category: 'Footwear' },
];

function App() {
  // You can manage isLoggedIn and username from App's state to make it dynamic
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
  const [currentUsername, setCurrentUsername] = React.useState<string | undefined>(undefined);

  // Mock login/logout functions to toggle state
  const handleLogin = () => {
    setIsUserLoggedIn(true);
    setCurrentUsername("Alice"); // Or get from an input, etc.
  };

  const handleLogout = () => {
    setIsUserLoggedIn(false);
    setCurrentUsername(undefined);
  };

  // ... (rest of your App component, counter state logic, etc.)

  return (
    <div className="App">
      <header className="App-header">
        <h1>My TypeScript React App</h1>
        {/* ... other components ... */}

        <hr style={{ margin: '20px 0', width: '50%' }} /> 

        <div>
          <button onClick={isUserLoggedIn ? handleLogout : handleLogin}>
            {isUserLoggedIn ? 'Test Log Out' : 'Test Log In'}
          </button>
        </div>

        {/* 2. Use the UserGreeting component */}
        <UserGreeting isLoggedIn={isUserLoggedIn} username={currentUsername} />

        {/* You can also test with hardcoded props */}
        {/* <UserGreeting isLoggedIn={true} username="Bob" /> */}
        {/* <UserGreeting isLoggedIn={true} /> */}
        {/* <UserGreeting isLoggedIn={false} /> */}

        {/* ... other components like DataFetcher ... */}

        <h2>Our Products</h2>
        <ProductList products={sampleProducts} />

        <h2>Names</h2>
        <NameForm />

        <h2>Themes</h2>

        <ThemeToggleButton /> {/* Add the button */}
        <ThemedPanel /> 
      </header>
    </div>
  );
}

export default App;
