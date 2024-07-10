import React, { useState } from "react";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const handleChange=(e)=>{
    setSelectedColor(e.target.value)
  }
  return (
    <div>
      <input type="color" onChange={handleChange}/>
      <div
        style={{
          width: "500px",
          height: "600px",
          backgroundColor: selectedColor,
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          fontFamily:"sans-serif",
          fontSize:'50px',
          fontWeight:'600'
        }}
      >
        Background
      </div>
    </div>
  );
};

export default ColorPicker;
