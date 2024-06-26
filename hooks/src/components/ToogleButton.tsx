// ToggleButton.js
import React, { useState } from 'react';
import '../styles/ToogleButton.css'

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={toggle}>{isOn ? 'ON' : 'OFF'}</button>
    </div>
  );
};

export default ToggleButton;
