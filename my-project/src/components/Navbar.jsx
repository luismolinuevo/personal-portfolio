import React, {useState} from 'react'
import {RxHamburgerMenu} from "react-icons/rx"

export default function Navbar() {
    
  return (
    <header className='py-8'>
        <nav className='flex justify-between'>
            <h1>Molinuevo</h1>
            <ul>
                <a>Home</a>
                <a>About</a>
                <a>Skills</a>
                <a>Projects</a>
                <a>Contact Me</a>
            </ul>
            <button className='md:hidden'><RxHamburgerMenu/></button>
            <button className='hidden'>X</button>
        </nav>
    </header>
  )
}
