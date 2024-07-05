//implement a simple todo list application with add and remove functionality.

import React, { useState } from 'react'

const Eight = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodos = () => {
      if(input.trim()!== ''){
            setTodos([...todos,input]);
            setInput('');
      }
    }
const removeTodo = (index) =>{
  const updatedTodos = todos.filter((_,i)=>i !== index);
  setTodos(updatedTodos);
}


  return (
    <div>
        <input type="text" onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={addTodos}>Add</button>

        <ul>
          {todos.map((todo,index)=>(
            <li key={index}>
              {todo} <button onClick={()=>removeTodo(index)}> Remove</button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Eight;