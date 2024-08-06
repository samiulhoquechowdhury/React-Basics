// import React from "react";

// // const itemsList = items.map((items)=>{
// //     return <li>{items}</li>
// // })

// const List2 = () => {
//   const items = ["Apple", "Banana", "Cherry"];
//   return (
//     <div>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default List2;

import React from 'react';

function List2() {
  const items = [
    { id: 1, name: 'Samiul' },
    { id: 2, name: 'Anish' },
    { id: 3, name: 'Rahul' },
    { id: 4, name: 'Jisnu' }
  ];

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default List2;

