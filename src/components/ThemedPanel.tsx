// src/components/ThemedPanel.tsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemedPanel: React.FC = () => {
  const { theme } = useTheme(); // Consume the context

  const panelStyle: React.CSSProperties = {
    padding: '20px',
    margin: '20px 0',
    borderRadius: '8px',
    border: '1px solid',
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333333',
    color: theme === 'light' ? '#333333' : '#f0f0f0',
    borderColor: theme === 'light' ? '#cccccc' : '#555555',
  };

  return (
    <div style={panelStyle}>
      <p>This panel uses the current theme: <strong>{theme.toUpperCase()}</strong></p>
      <p>Try changing the theme with the button!</p>
    </div>
  );
};

export default ThemedPanel;
