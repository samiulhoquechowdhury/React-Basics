// import React, { useState } from "react";

// const Two = () => {
//     const [count, setCount] = useState(0) 
//     const Increment = () => {
//         setCount(count + 1)
//     }
//     const Decrement = () => {
//         setCount(count - 1)
//     }
//   return (
//     <div>
//       <button onClick={Decrement}>-</button>
//       <span> { count } </span>
//       <button onClick={Increment}>+</button>
//     </div>
//   );
// };

// export default Two;


//Another Way

import React, { useState } from 'react'

const Two = () => {
    const [count, setCount] = useState(0);


  return (
    <div>
      <button onClick={()=>setCount(count -1)}>-</button>
      <span> { count } </span>
      <button onClick={()=>setCount(count + 1)}>+</button>
    </div>
  )
}

export default Two

