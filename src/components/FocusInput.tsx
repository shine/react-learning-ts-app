// src/components/FocusInput.tsx
import React, { useRef } from 'react';

const FocusInput: React.FC = () => {
  // 1. Create a ref object. Initialize with null for DOM elements.
  //    We type it to specify it will hold an HTMLInputElement or null.
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocusClick = () => {
    // 2. Access the DOM element via inputRef.current
    //    The optional chaining (?.) is a good safety measure,
    //    though in this click handler, the input should exist.
    inputRef.current?.focus(); 
  };

  return (
    <div style={{ border: '1px solid green', padding: '15px', margin: '15px 0' }}>
      <h4>Focus Input with useRef</h4>
      {/* 3. Attach the ref to the input element */}
      <input 
        type="text" 
        ref={inputRef} 
        placeholder="Click button to focus me" 
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleFocusClick}>Focus the Input</button>
    </div>
  );
};

export default FocusInput;
