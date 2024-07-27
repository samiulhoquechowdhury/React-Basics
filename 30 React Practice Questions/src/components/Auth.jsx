//Q: create a user authentication system using useContext to manage user login logout states.

import React from "react";
import { useAuth } from "./AuthContext";

export default function Auth(){
  const [user, login, logout] = useAuth();
  return (
    <div>
      <h1>Use Authentication Example</h1>
      {user ? (
        <div>
          <p>Welcome , {user.username}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login({ username: 'user12345'})}>Login</button>
      )}
    </div>
  );
};

// export default Auth;
