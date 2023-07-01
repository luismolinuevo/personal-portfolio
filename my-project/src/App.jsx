import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='bg-[#F2F2F2] text-[black] px-[60px]'>
      <Navbar/>
      <Homepage/>
    </div>
  )
}

export default App
