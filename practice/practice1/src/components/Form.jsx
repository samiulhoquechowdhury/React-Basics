import React from 'react'

const Step1 = ({ data, handleChange }) => {
    <div className='step'>
        <h2>Step 1 : Personal Information</h2>
        <label>
            first Name:
            <input type="text"
            name='firstname'
            value={data.firstName}
            onChange={handleChange} />
        </label>
    </div>
}

const Form = () => {
  return (
    <div>
      
    </div>
  )
}

export default Form
