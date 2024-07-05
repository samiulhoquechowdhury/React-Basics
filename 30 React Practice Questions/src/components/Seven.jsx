//Build a timer that counts down from a specified time.

import React, { useEffect, useState } from 'react'

const Seven = () => {
    const [time, setTime] = useState(30);

    useEffect(()=>{
        if(time > 0) {
            const timer = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        }
    })

  return (
    <div>
        <h1>Time Left : {time} seconds</h1>
    </div>
  )
}

export default Seven
