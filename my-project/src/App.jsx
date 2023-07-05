import { useState } from 'react'
// import './App.css'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'
import Projects from './pages/Projects'

function App() {
  return (
    <div className='min-h-screen bg-[#e5e5e5] text-[black] font-tit m-0 p-0 box-border'>
       <Navbar/>
       <Homepage/>
       <AboutMe/>
       <Skills/>
      <Projects/>
    </div>
    
  )
}

export default App
