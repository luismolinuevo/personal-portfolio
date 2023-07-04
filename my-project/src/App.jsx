import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'

function App() {
  return (
    <div className='min-h-screen bg-[#e5e5e5] text-[black] font-tit'>
      <Navbar/>
      <Homepage/>
      <AboutMe/>
      <Skills/>
    </div>
  )
}

export default App
