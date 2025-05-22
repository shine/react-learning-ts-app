// src/components/NameForm.tsx
import React, { useState } from 'react';

const NameForm: React.FC = () => {
  // 1. State to hold the input value
  const [name, setName] = useState<string>('');

  // 2. onChange handler for the input
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value); // Update state with the new input value
  };

  // 3. onSubmit handler for the form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default page reload
    if (name.trim() === '') {
      alert('Please enter a name.');
      return;
    }
    alert(`Hello, ${name}! Form submitted.`);
    // Here you would typically do something with the name, like sending it to an API
    setName(''); // Optionally clear the input field after submission
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '15px 0' }}>
      <h4>Simple Name Form</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput">Name: </label>
          <input
            type="text"
            id="nameInput"
            value={name} // Input value is controlled by React state
            onChange={handleNameChange} // State is updated on every change
            placeholder="Enter your name"
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
      </form>
      {name && <p style={{ marginTop: '10px' }}>Current input: {name}</p>}
    </div>
  );
};

export default NameForm;
