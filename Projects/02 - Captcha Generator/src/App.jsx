import React from 'react'
import Counter from './components/Counter.jsx'
import Cards from './components/Cards.jsx'

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
