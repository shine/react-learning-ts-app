// src/components/Greeting.tsx
import React from 'react';

// 1. Define an interface for the component's props
interface GreetingProps {
  name: string; // 'name' is a required string
  message?: string; // 'message' is an optional string (due to the '?')
}

// 2. Use the interface to type the props
// React.FC stands for "Functional Component" and is a generic type for function components.
const Greeting: React.FC<GreetingProps> = ({ name, message = "Welcome to our TypeScript React app!" }) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>{message}</p>
    </div>
  );
};

export default Greeting;
