import React, { useState, useEffect } from 'react';

function UserComponent() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user:', error));

    // Optional clean up (not needed here)
    return () => {
      setUser(null); // Reset user data
    };
  }, [userId]); // Re-run effect whenever `userId` changes

  return (
    <div>
      <div>
        <button onClick={() => setUserId(prevId => prevId - 1)} disabled={userId <= 1}>Previous User</button>
        <button onClick={() => setUserId(prevId => prevId + 1)}>Next User</button>
      </div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default UserComponent;
