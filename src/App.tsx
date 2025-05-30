// src/App.tsx
import React from 'react';
// ... other imports like Counter, DataFetcher etc.
import Greeting from './components/Greeting';
import DataFetcher from './components/DataFetcher';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';
import ErrorBoundary from './components/ErrorBoundary';
import ProblematicComponent from './components/ProblematicComponent';
import ProductList from './components/ProductList';
import type { Product } from './components/ProductList';

import './App.css';

const initialProducts: Product[] = [ // Make sure this or similar is defined
  { id: 'p1', name: 'Laptop Pro X', price: 1250, category: 'Electronics' },
  { id: 'p2', name: 'Espresso Machine V2', price: 280, category: 'Appliances' },
  { id: 'p3', name: 'Noise-Cancelling Headphones II', price: 199, category: 'Electronics' },
  { id: 'p4', name: 'Trail Running Shoes Pro', price: 120, category: 'Footwear' },
];

function App() {
  const [products, setProducts] = React.useState<Product[]>(initialProducts);
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

    const handleChangeFirstProductPrice = () => { // Example function from before
    setProducts(currentProducts => 
      currentProducts.map(product => 
        product.id === 'p1' 
          ? { ...product, price: product.price + 50 } 
          : product 
      )
    );
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
        
        <h2>Our Products</h2>   
        <button onClick={handleChangeFirstProductPrice} style={{marginBottom: '10px'}}></button>    
        <ProductList products={products} />

        {/* 2. Use the DataFetcher component */}
        <DataFetcher itemId={currentCount}/>

        <FocusInput />

        <p>The following component is wrapped in an ErrorBoundary:</p>
        <ErrorBoundary fallback={<h2 style={{color: 'red'}}>A specific fallback UI for this component!</h2>}>
          <ProblematicComponent />
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
