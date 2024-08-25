import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    }
  ])
  return (
    <div>
      <Router/>
    </div>
  )
}

export default App
