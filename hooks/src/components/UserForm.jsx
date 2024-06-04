import React, { useState } from 'react'

const UserForm = () => {
    const[name,setName] = useState('')
    const[age,setAge]= useState('')

    const handleNameChange = (event)=>{
        setName(event.target.value)
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };
  return (
    <div>
    <div>
      <label>Name: </label>
      <input type="text" value={name} onChange={handleNameChange} />
    </div>
    <div>
      <label>Age: </label>
      <input type="text" value={age} onChange={handleAgeChange} />
    </div>
    <p>
      Name: {name}, Age: {age}
    </p>
  </div>
  )
}

export default UserForm
