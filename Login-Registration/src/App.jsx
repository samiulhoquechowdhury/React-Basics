import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  const [registered, setRegistered] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {!registered ? (
        <Register setRegistered={setRegistered} />
      ) : !loggedIn ? (
        <Login setLoggedIn={setLoggedIn} />
      ) : (
        <Welcome />
      )}
    </div>
  );
};

const Welcome = () => {
  const username = localStorage.getItem('username');
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
    </div>
  );
};

export default App;
