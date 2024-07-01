import React from "react";
import "./App.css";
const Calculator = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form action="">
          <div>
            <label htmlFor="">Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter weight value"
              // value={Weight}
            />
          </div>
          <div>
            <label htmlFor="">Height (in)</label>
            <input
              type="text"
              placeholder="Enter height value"
              // value={height}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
