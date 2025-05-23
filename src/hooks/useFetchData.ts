import { useState, useEffect } from 'react';

// Define an interface for the structure of the fetched Todo data
// This could also be imported from a shared types file or passed as a generic
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const useFetchData = (itemId: number) => {
  const [data, setData] = useState<Todo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${itemId}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result: Todo = await response.json();
        setData(result);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    if (itemId) { 
        fetchData();
    } else {
        setLoading(false); 
        setData(null);
    }
    
  }, [itemId]); // Dependency array includes itemId

  return { data, loading, error };
};

export default useFetchData;
