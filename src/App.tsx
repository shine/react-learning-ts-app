// src/App.tsx
import React, {useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // 1. Import routing components
import HomePage from './pages/HomePage'; // Import your page components
import AboutPage from './pages/AboutPage';
import UserProfilePage from './pages/UserProfilePage';
import CounterDisplay from './components/CounterDisplay';
import CounterControls from './components/CounterControls';
import Modal from './components/Modal';
import ComplexCounter from './components/ComplexCounter';
// ... other existing imports (ThemeToggleButton, ThemedPanel, etc.)
import './App.css';

// You can keep your existing layout/components here or create a dedicated Layout component
const Navigation: React.FC = () => (
  <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
    <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
    <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
    <Link to="/profile/Alice" style={{ marginRight: '10px' }}>Profile (Alice)</Link>
    <Link to="/profile/Bob">Profile (Bob)</Link>
  </nav>
);

function App() {
  // ... (any existing App-level state or logic can remain)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Multi-Page React App</h1>
        <Navigation /> {/* Add your navigation links */}
      </header>

      <main style={{ padding: '20px' }}>
        {/* 2. Define your routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile/:username" element={<UserProfilePage />} /> {/* Route with a parameter */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} /> {/* Fallback for unmatched routes */}
        </Routes>
      </main>

      {/* You can still include other global components if needed */}
      {/* For example, ThemeToggleButton, ThemedPanel if they are global */}
      {/* <ThemeToggleButton /> */}
      {/* <ThemedPanel /> */}

      <footer style={{ marginTop: '30px', paddingTop: '10px', borderTop: '1px solid #ccc', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} My Awesome App</p>
      </footer>

      <CounterDisplay />
      <CounterControls />

      <hr style={{ margin: '20px 0', width: '50%' }} /> 

      {/* 3. Button to trigger the modal */}
      <button onClick={openModal}>Open Modal</button>

      {/* 4. The Modal component itself */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>This is a Modal!</h2>
        <p>This content is rendered in a different part of the DOM tree using a portal, which helps avoid CSS stacking issues.</p>
        <button onClick={closeModal}>Close from inside</button>
      </Modal>

      <hr style={{ margin: '20px 0', width: '50%' }} /> 

      {/* 2. Use the ComplexCounter component */}
      <ComplexCounter />
    </div>
  );
}

export default App;
