// src/components/ProblematicComponent.tsx
import React, { useState } from 'react';

const ProblematicComponent: React.FC = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  const handleClick = () => {
    setShouldThrow(true);
  };

  if (shouldThrow) {
    // Simulate an error during the render phase
    throw new Error("I'm a deliberately thrown error from ProblematicComponent!");
  }

  return (
    <div style={{ border: '1px dashed orange', padding: '10px', margin: '10px 0' }}>
      <h4>Problematic Component</h4>
      <p>This component is fine... until you click the button.</p>
      <button onClick={handleClick}>Click me to cause an error</button>
    </div>
  );
};

export default ProblematicComponent;
