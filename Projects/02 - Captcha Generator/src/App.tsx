import React from 'react'
import Counter from './components/Counter.js'
import Cards from './components/Cards.js'

function App() {
  return (
    <>
    <Counter/>
    <div className="cards-list">
      <Cards />
      <Cards />
      <Cards />
    </div>
    
    </>
  )
}
export default App
