import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about'); // Programmatic navigation
  };

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to our awesome application!</p>
      <button onClick={goToAbout}>Go to About Page Programmatically</button>
    </div>
  );
};
export default HomePage;
