import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import './App.css';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={`button ${theme}`}>
      Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

const ThemedContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container">
      <div className={`content ${theme}`}>
      <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      <p>This is an example of using useContext in React.</p>
    </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggleButton />
        <ThemedContent />
      </div>
    </ThemeProvider>
  );
};

export default App;
