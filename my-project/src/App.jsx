import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='bg-[#e5e5e5] text-[black] font-tit'>
      <Navbar/>
      <Homepage/>
    </div>
  )
}

export default App
