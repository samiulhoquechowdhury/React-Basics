import React, { useState } from "react";

const LoginRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistered) {
      // Handle login logic
      if (email && password) {
        // Simulate successful login
        setIsLoggedIn(true);
      } else {
        alert("Please enter your email and password to log in.");
      }
    } else {
      // Handle registration logic
      if (email && password) {
        // Simulate successful registration
        setIsRegistered(true);
      } else {
        alert("Please enter your email and password to register.");
      }
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {email}!</h2>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button type="submit">{isRegistered ? "Login" : "Register"}</button>
          </form>
          <h3>
            {isRegistered
              ? "Don't have an account? Register!"
              : "Already have an account? Login!"}
          </h3>
          <button onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Register" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginRegistration;
