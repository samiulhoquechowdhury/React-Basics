import React, { useState } from 'react'

const Three = () => {
    const [input,setInput] = useState('');
  return (
    <div>
      <form>
        <input type="text" placeholder='Write something' 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
      </form>
      <h3>User Input : {input} </h3>
    </div>
  )
}

export default Three


