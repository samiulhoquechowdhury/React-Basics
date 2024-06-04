import React, { useState } from 'react';

const ColorChanger = () => {
  const [bgColor, setBgColor] = useState('purple'); 

  const changeColor = () => {
    const newColor = getRandomColor(); 
    setBgColor(newColor); 
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="color-changer" style={{ backgroundColor: bgColor }}>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default ColorChanger;
