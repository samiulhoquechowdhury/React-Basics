import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  function increment(){
    setCount(count + 1)
  }

  function decrement(){
    setCount(count - 1)
  }
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default App
