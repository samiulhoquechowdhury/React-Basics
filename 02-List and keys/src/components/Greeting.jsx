import React from 'react';

function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Age is : {props.age}</p>
    </div>
  ) 
}

export default Greeting;
