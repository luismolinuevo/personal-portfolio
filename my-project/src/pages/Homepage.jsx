import React from "react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsFillFileEarmarkFill } from "react-icons/bs";
import Resume from "../assets/Resume.pdf";

export default function Homepage() {
  return (
    <section className="w-full h-screen px-[50px] py-6 md:px-[80px] md:flex justify-center">
      <div>

      {/* <div className="">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="p-0 w-64 h-64 absolute top-0 right-0 mt-14 mr-14">
          <path
            fill="#05AFF2"
            d="M44.2,-67.9C55.7,-61.4,62.4,-46.5,63,-32.5C63.5,-18.6,57.8,-5.5,55.9,8C53.9,21.6,55.7,35.7,49.4,42.5C43.1,49.4,28.7,48.9,15.6,52.3C2.6,55.6,-9,62.8,-23.3,65.1C-37.7,67.4,-54.8,64.8,-65.1,55.2C-75.5,45.5,-79,28.7,-81.2,11.8C-83.4,-5,-84.1,-21.9,-75.4,-31.7C-66.7,-41.5,-48.4,-44.3,-34.3,-49.6C-20.1,-54.9,-10.1,-62.9,3.1,-67.7C16.3,-72.6,32.7,-74.4,44.2,-67.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div> */}
      <main className="w-full flex justify-center text-center pt-[80px] md:pt-[125px]">
        <div className="flex flex-col">
          <motion.h1
            className="text-[40px] text-main"
            animate={{ y: 0 }}
            initial={{ y: -100 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Hello!
          </motion.h1>
          <motion.h2
            className="text-[65px]"
            animate={{ y: 0 }}
            initial={{ y: -100 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Im Luis
          </motion.h2>
          <motion.h3
            className="text-[65px]"
            animate={{ y: 0 }}
            initial={{ y: -100 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <span className="text-main">Moli</span>nuevo
          </motion.h3>
          <motion.h4
            className="text-[35px]"
            animate={{ y: 0 }}
            initial={{ y: -100 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            Full Stack Web Developer
          </motion.h4>
        </div>
      </main>
      {/* <aside className="hidden md:flex flex-col absolute top-[350px] right-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-2 transform rotate-90 text-[20px]">Find me at</h1>
          <hr className="w-[2px] h-8 bg-black mt-6 mb-1" />
          <div className="flex flex-col items-center justify-center text-main text-[25px] gap-2">
            <a href="https://github.com/luismolinuevo" target="_blank" className="cursor-pointer"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/luismolinuevo/" target="_blank" className="cursor-pointer"><BsLinkedin /></a>
            <a href={Resume} target="blank_" className="cursor-pointer"><BsFillFileEarmarkFill /></a>
          </div>
        </div>
      </aside> */}
      <aside className="hidden md:flex flex-col absolute top-[350px] right-12">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h1 className="mb-2 transform rotate-90 text-[20px]">Find me at</h1>
          <hr className="w-[2px] h-8 bg-black mt-6 mb-1" />
          <div className="flex flex-col items-center justify-center text-main text-[25px] gap-2">
            <a
              href="https://github.com/luismolinuevo"
              target="_blank"
              className="cursor-pointer"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/luismolinuevo/"
              target="_blank"
              className="cursor-pointer"
            >
              <BsLinkedin />
            </a>
            <a href={Resume} target="blank_" className="cursor-pointer">
              <BsFillFileEarmarkFill />
            </a>
          </div>
        </motion.div>
      </aside>
      <div className="flex justify-center">
        
      </div>


      </div>
    </section>
  );
}
