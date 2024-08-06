import React, { useState } from "react";

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(10);

  const leftCount = () => {
    if (left !== 10 || right !== 0) {
      setLeft(left + 1);
      setRight(right - 1);
    } else{
      return;
    }
  };
  const rightCount = () => {
    if (left !== 0 || right !== 10) {
      setLeft(left - 1);
      setRight(right + 1);
    } else{
      return;
    }
  };

  return (
    <div className="container">
      <div className="apple">
        <h1> {left} Apple</h1>
      </div>
      <div className="btns">
        <button onClick={leftCount}>Left</button>
        <button onClick={rightCount}>Right</button>
      </div>
      <div className="apple">
        <h1> {right} Apple</h1>
      </div>
    </div>
  );
};

export default App;
