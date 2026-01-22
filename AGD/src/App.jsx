import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'

const App = () => {
  return (
   
    <div className='bg-[#1E1E1E] '>
      <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
    </div>
        
     
  
  )
}

export default App
