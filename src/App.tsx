// src/App.tsx
import Greeting from './components/Greeting'; // Import the Greeting component
import './App.css'; // Assuming you have this file from the template

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My First TypeScript React App</h1>

        {/* Using the Greeting component correctly */}
        <Greeting name="Alice" />
        <Greeting name="Bob" message="How are you today?" />

      </header>
    </div>
  );
}

export default App;
