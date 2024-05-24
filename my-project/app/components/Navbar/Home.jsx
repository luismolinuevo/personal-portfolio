"use client"

import React from "react";
import { motion } from "framer-motion";
// import { BsGithub, BsLinkedin, BsFillFileEarmarkFill } from "react-icons/bs";
// import Resume from "../assets/Resume.pdf";

export default function Homepage() {
  return (
    <section
      className="w-full h-screen px-[50px] md:px-[80px] md:flex block"
      id="home"
    >
      <div>
        <main className="w-full flex justify-center pt-[40px] md:pt-[150px]">
          <div className="flex flex-col">
            <motion.h1
              className="text-[40px] text-main"
              animate={{ y: 0 }}
              initial={{ y: -100 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Hello There!
            </motion.h1>
            <motion.h2
              className="text-[65px]"
              animate={{ y: 0 }}
              initial={{ y: -100 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Im Luis Molinuevo
            </motion.h2>
            {/* <motion.h3
              className="text-[65px]"
              animate={{ y: 0 }}
              initial={{ y: -100 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <span className="text-main">Moli</span>nuevo
            </motion.h3> */}
            <motion.h4
              className="text-[20px] sm:text-[23px] sm:w-[400px] md:w-[600px] lg:w-[800px]"
              animate={{ y: 0 }}
              initial={{ y: -100 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              Im a Full Stack Software Engineer with a passion for web development.Welcome to my corner of the internet. Happy to have you here.
            </motion.h4>
          </div>
        </main>
        {/* <aside className="hidden md:flex flex-col absolute top-[350px] right-12">
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
                title="github"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/luismolinuevo/"
                target="_blank"
                className="cursor-pointer"
                title="linkedin"
              >
                <BsLinkedin />
              </a>
              <a
                href={"/Resume.pdf"}
                target="blank_"
                className="cursor-pointer"
                title="Resume"
              >
                <BsFillFileEarmarkFill />
              </a>
            </div>
          </motion.div>
        </aside> */}
        <div className="flex  gap-2 mt-4">
          <motion.a
            href="#projects"
            className="bg-main text-white p-2 md:p-3 text-xl cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            My work
          </motion.a>
          <motion.a
            href="#contactme"
            className="border-2 border-main p-2 md:p-3 text-main text-xl cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            Hire Me!
          </motion.a>
        </div>
        <div className="flex pt-2">
          <motion.a
            href={"/Resume.pdf"}
            target="blank_"
            title="Resume"
            className="border-2 border-main p-2 md:p-3 text-main text-xl cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            Resume
          </motion.a>
        </div>
      </div>
      {/* <RainCloud/> */}
    </section>
  );
}
