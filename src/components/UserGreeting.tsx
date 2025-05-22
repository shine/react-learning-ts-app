// src/components/UserGreeting.tsx
import React from 'react';

interface UserGreetingProps {
  isLoggedIn: boolean;
  username?: string; // Username is optional
}

// A simple mock button component for demonstration
const LoginButton: React.FC = () => <button>Please Log In</button>;
const LogoutButton: React.FC = () => <button>Log Out</button>;


const UserGreeting: React.FC<UserGreetingProps> = ({ isLoggedIn, username }) => {
  // Technique 1: Using if/else to prepare a block of JSX
  let statusMessage;
  if (isLoggedIn) {
    statusMessage = <p>You are currently logged in.</p>;
  } else {
    statusMessage = <p>You are not logged in.</p>;
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h4>User Greeting Component</h4>

      {/* Technique 2: Ternary operator for the main greeting */}
      {isLoggedIn ? (
        username ? (
          <p>Welcome back, <strong>{username}</strong>!</p>
        ) : (
          <p>Welcome back!</p>
        )
      ) : (
        <p>Hello, Guest!</p>
      )}

      {/* Render status message prepared with if/else */}
      {statusMessage}

      {/* Technique 3: Logical && for showing additional info only if logged in and username exists */}
      {isLoggedIn && username && (
        <p style={{ fontSize: '0.9em', color: 'gray' }}>
          Your profile settings are available.
        </p>
      )}

      {/* Another ternary for Login/Logout button */}
      {isLoggedIn ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};

export default UserGreeting;
