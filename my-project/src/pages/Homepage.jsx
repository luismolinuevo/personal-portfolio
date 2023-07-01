import React from 'react'
import {motion} from "framer-motion"

export default function Homepage() {
  return (
    <div className='h-screen'>
        <div className="">
      <motion.svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 1.0, rotate: 0, x: 0, y: 0 }}
        animate={{
          scale: [0.9, 0.9, 0.8], // Add more values if you want more animation points
          rotate: [0, 8, -8, 0], // Add more values for rotation animation
          x: [0, 8, -8, 0], // Add more values for horizontal movement
          y: [0, 8, -8, 0], // Add more values for vertical movement
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        className="h-64 w-64"
      >
        <motion.path
          fill="#05AFF2"
          d="M22.4,-18.6C26.4,-12.8,25.2,-3.7,21.9,2.8C18.7,9.2,13.3,12.9,6.5,17.9C-0.3,22.8,-8.6,29,-17.6,27.9C-26.5,26.9,-36.1,18.7,-39.1,8.2C-42,-2.3,-38.3,-14.9,-30.7,-21.5C-23.1,-28.1,-11.6,-28.6,-1.2,-27.7C9.2,-26.7,18.4,-24.4,22.4,-18.6Z"
          transform="translate(100 100)"
        />
      </motion.svg>
    </div>
    </div>
  )
}
