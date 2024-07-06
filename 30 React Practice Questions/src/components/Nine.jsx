//create a component that changes background color on click.
import React, { useState } from "react";

const Nine = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const handleClick = () => {
    const newColor = backgroundColor === "white" ? "lightblue" : " white";
    setBackgroundColor(newColor);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        fontSize: "20px",
        cursor: "pointer",
      }}
    >
      click me to change color
    </div>
  );
};

export default Nine;
