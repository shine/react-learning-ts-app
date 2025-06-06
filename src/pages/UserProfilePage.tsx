import React from 'react';
import { useParams } from 'react-router-dom';

// Define the shape of expected URL parameters
interface UserProfileParams {
  username: string;
  [key: string]: string | undefined; // Allow other potential params, making username specifically typed
}

const UserProfilePage: React.FC = () => {
  // Use a type assertion or ensure your route always provides 'username'
  const params = useParams<UserProfileParams>();
  const username = params.username || "Guest"; // Fallback if username is somehow undefined

  return (
    <div>
      <h2>User Profile</h2>
      <p>This is the profile page for user: <strong>{username}</strong>.</p>
    </div>
  );
};
export default UserProfilePage;
