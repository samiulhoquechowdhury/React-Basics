import React from 'react'

const myList = ['Apple', 'Banana', 'Mango', 'Grapes', 'Pineapple'];
const listItems = myList.map((myList)=>{
    return <li>{myList}</li>
})

const List = () => {
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  )
}

export default List
