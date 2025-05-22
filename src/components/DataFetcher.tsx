// src/components/DataFetcher.tsx
import React, { useState, useEffect } from 'react';

// Define an interface for the structure of the fetched Todo data
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoProps {
  itemId: number;
}

const DataFetcher: React.FC<TodoProps> = ( {itemId} ) => {
    // State for the fetched data (can be a Todo object or null if not yet fetched)
    const [todo, setTodo] = useState<Todo | null>(null);
    // State to track loading status
    const [loading, setLoading] = useState<boolean>(true);
    // State to store any potential error messages
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Define an async function inside useEffect to perform the fetch
        const fetchTodo = async () => {
        try {
            setLoading(true); // Set loading true before fetching
            setError(null);   // Clear previous errors
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/'+itemId);
                    
                    if (!response.ok) 
                    {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    
                    const data: Todo = await response.json();
                    setTodo(data);
                } catch (e) 
                {
                    if (e instanceof Error) 
                    {
                        setError(e.message);
                    } else 
                    {
                        setError('An unknown error occurred');
                    }
                } finally 
                {
                    setLoading(false); // Set loading false after fetch attempt (success or failure)
                }
                };

                fetchTodo(); // Call the async function

                // Since we're only fetching data once on mount, we provide an empty dependency array.
                // No cleanup function is needed for this simple fetch.
            }, [itemId]);

            // Conditional rendering based on loading and error states
            if (loading) {
                return <p>Loading data...</p>;
            }

            if (error) {
                return <p>Error fetching data: {error}</p>;
            }

            if (!todo) {
                return <p>No data found.</p>; // Should ideally not happen if no error and not loading
            }

            return (
                <div>
                <h3>Fetched Todo Item</h3>
                <p><strong>ID:</strong> {todo.id}</p>
                <p><strong>Title:</strong> {todo.title}</p>
                <p><strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}</p>
                </div>
            );
    };

export default DataFetcher;
