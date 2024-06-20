import React, { useMemo, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const expensiveCalculation = (num) => {
    console.log('calculating...');

    for(let i =  0;i < 1000000; i++) {
      num += 1;
    }
    return num;
  }

  const memoizedValue = useMemo(()=> expensiveCalculation(count), [count]);
  return (
    <div className="App">
      <header className='App-header'>
        <h1>useMemo Example</h1>
        <div>
          <button onClick={()=>setCount(count + 1)}>Increment</button>
          <p>Count: {count}</p>
          <p>Expensive calculation Result: {memoizedValue}</p>
        </div>
        <div>
          <input
            type="text" 
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            placeholder='Type something...'
          />
          <p>Input: {input}</p>
        </div>
      </header>
    </div>
  )
}

export default App
