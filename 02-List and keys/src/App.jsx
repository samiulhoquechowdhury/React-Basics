import React from 'react'
import List from './components/List'
import List2 from './components/List2'
import Greeting from './components/Greeting'

const App = () => {
  return (
    <div>
      {/* <List/> */}
      <List2/>
      <Greeting name="Samiul" age={30} />
      <Greeting name="Nafisa" age={34} />
    </div>
  )
}

export default App
