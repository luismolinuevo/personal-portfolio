"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsFillFileEarmarkFill } from "react-icons/bs";
import { FiCloud,FiCircle, FiHexagon } from "react-icons/fi";
import  "./test.css"

export default function Homepage() {
  return (
    <section
      className="w-full h-screen px-[50px] md:px-[80px] md:flex block justify-evenly"
      id="home"
    >
      <div>
        <main className="w-full flex justify-center pt-[50px] sm:pt-[60px] md:pt-[160px]">
          <div className="flex flex-col">
            <motion.h1
              className="text-[30px] sm:text-[35px] text-main m-0 leading-tight"
              animate={{ y: 0 }}
              initial={{ y: -100 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Hello There!
            </motion.h1>
            <motion.h2
              className="text-[60px] sm:text-[65px]  m-0 leading-tight"
              animate={{ y: 0 }}
              initial={{ y: -100 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              I'm Luis <span className="text-main">Moli</span>nuevo
            </motion.h2>
            <motion.h4
              className="text-[20px] sm:text-[23px] md:text-[26px] sm:w-[400px] md:w-[600px] lg:w-[800px]"
              animate={{ y: 0 }}
              initial={{ y: -100 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              Im a Full Stack Software Engineer with a passion for web
              development.Welcome to my corner of the internet. Happy to have
              you here.
            </motion.h4>
          </div>
        </main>
        <div className="flex gap-2 mt-4">
          <motion.a
            href="#contactme"
            className="bg-main text-white p-2 md:p-3 text-xl cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            Hire Me!
          </motion.a>
          <motion.a
            href="#projects"
            className="border-2 border-main p-2 md:p-3 text-main text-xl cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            My work
          </motion.a>
        </div>

        <div className="flex gap-2">
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
          <FiCircle
        size={30}
        className="absolute bottom-20  left-16 hidden animate-bounce text-amber-500 sm:inline-block md:left-40"
      />
      {/* <FiHexagon size={30} className="absolute top-100 left-1/4 hidden animate-spin text-purple-500 sm:inline-block" /> */}
          <div className="flex text-main text-[25px] text-center items-center gap-2">
            <motion.a
              href="https://github.com/luismolinuevo"
              target="_blank"
              className="cursor-pointer"
              title="github"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.1 }}
            >
              <BsGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/luismolinuevo/"
              target="_blank"
              className="cursor-pointer"
              title="linkedin"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.2 }}
            >
              <BsLinkedin />
            </motion.a>
          </div>
        </div>
      </div>
      <motion.img
        src="/landingpage.png"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="w-[575px] h-[575px] mt-10 hidden 2xl:block"
      />
      <FiCloud size={30} className="absolute bottom-48 left-2/3 hidden animate-pulse text-blue-500 sm:inline-block" />
      <ul className={'circles'}>
        <li className="bg-primary-300"></li>
        <li className="bg-purple-300"></li>
        <li className="bg-indigo-300"></li>
        <li className="bg-emerald-300"></li>
        <li className="bg-teal-300"></li>
        <li className="bg-pink-300"></li>
        <li className="bg-blue-300"></li>
        <li className="bg-orange-300"></li>
        <li className="bg-yellow-300"></li>
        <li className="bg-gray-200 dark:bg-gray-700"></li>
      </ul>
    </section>
  );
}
