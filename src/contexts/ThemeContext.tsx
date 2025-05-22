// src/contexts/ThemeContext.tsx
import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

// 1. Define the shape of the context data
type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// 2. Create the context with a default value
// The default value here is mostly for type safety if a component tries to consume
// without a Provider, though we'll ensure a Provider is always used.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Create a custom Provider component (optional but good practice)
interface ThemeProviderProps {
  children: ReactNode; // To wrap other components
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light'); // Default theme is light

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// 4. Create a custom hook for consuming the context (optional but good practice)
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
