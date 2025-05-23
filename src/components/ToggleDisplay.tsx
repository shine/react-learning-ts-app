// src/components/ToggleDisplay.tsx
import React from 'react';
import useToggle from '../hooks/useToggle'; // Import our custom hook

const ToggleDisplay: React.FC = () => {
  // Use our custom hook to get the state and the toggle function
  const [isContentVisible, toggleContentVisibility] = useToggle(false); // Initially hidden
  const [isFeatureEnabled, toggleFeature] = useToggle(true); // Initially enabled

  return (
    <div style={{ border: '1px dashed blue', padding: '10px', margin: '10px 0' }}>
      <h4>Toggle Display Component (using useToggle)</h4>

      <div>
        <button onClick={toggleContentVisibility}>
          {isContentVisible ? 'Hide' : 'Show'} Content
        </button>
        {isContentVisible && (
          <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#e0e0e0' }}>
            <p>This is the content that can be toggled!</p>
          </div>
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={toggleFeature}>
          Toggle Feature ({isFeatureEnabled ? 'Enabled' : 'Disabled'})
        </button>
        <p>Feature Status: {isFeatureEnabled ? 'ON' : 'OFF'}</p>
      </div>
    </div>
  );
};

export default ToggleDisplay;
