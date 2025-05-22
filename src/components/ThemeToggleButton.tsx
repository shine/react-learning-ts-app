// src/components/ThemeToggleButton.tsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext'; // Use our custom hook

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // Consume the context

  return (
    <button onClick={toggleTheme} style={{ margin: '10px' }}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default ThemeToggleButton;
