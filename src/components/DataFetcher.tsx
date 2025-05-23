// src/components/DataFetcher.tsx
import React from 'react';
import useFetchData from '../hooks/useFetchData';

// Define an interface for the structure of the fetched Todo data
interface TodoProps {
  itemId: number;
}

const DataFetcher: React.FC<TodoProps> = ({ itemId }) => {
  const { data: todo, loading, error } = useFetchData(itemId);

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
