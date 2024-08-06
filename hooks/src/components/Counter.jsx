import React, { useState } from 'react'

const Counter = () => {
        const[num, setNum] = useState(0);
        const handleClick = ()=>{
            setNum(num + 1)
        }
  return (
    <div>
        <h2>you clicked {num} times</h2>
        <button onClick={handleClick}>
                Add one
        </button>
    </div>
  )
}

export default Counter
