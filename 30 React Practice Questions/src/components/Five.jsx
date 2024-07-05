// import React, { useState } from 'react'

// const Five = () => {
//     const [istoggled, setIsToggled] = useState(false)
//     const handleToggle  = () => {
//         setIsToggled(!istoggled);
//     }

//   return (
//     <div>
//       <input type="checkbox"
//       onChange={handleToggle}
//        />
//       <p>{istoggled ? 'On' : 'OFF'}</p>
//     </div>
//   )
// }

// export default Five

import React, { useState } from 'react'

const Five = () => {

    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(!isToggled)
    }
  return (
    <div>
      <input type="checkbox" onChange={handleToggle} />
      <p>{isToggled ? 'ON' : 'Off'}</p>
    </div>
  )
}

export default Five


