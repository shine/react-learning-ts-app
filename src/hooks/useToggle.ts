// src/hooks/useToggle.ts
import { useState, useCallback } from 'react';

// Define the return type of the hook
// It will return an array: [booleanState, toggleFunction]
type UseToggleReturnType = [boolean, () => void];

// The custom hook function
// It takes an optional initialValue (defaults to false)
const useToggle = (initialValue: boolean = false): UseToggleReturnType => {
  const [isOn, setIsOn] = useState<boolean>(initialValue);

  // We use useCallback to ensure the toggle function reference is stable
  // if it were to be passed as a prop or used in a dependency array.
  // For this simple toggle, it might not be strictly necessary if not used
  // in dependencies, but it's good practice to consider.
  const toggle = useCallback(() => {
    setIsOn(prevIsOn => !prevIsOn);
  }, []); // Empty dependency array means this function reference never changes

  return [isOn, toggle];
};

export default useToggle;
