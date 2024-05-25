"use client";

import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import LightModeDarkModeButton from "./LightModeDarkModeButton";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full px-[50px] py-7 md:px-[80px] text-center fixed z-20 block ${
        openNav
          ? "bg-main h-screen"
          : isScrolled
          ? "bg-gray-800 bg-opacity-80"
          : ""
      }`}
      id="top"
      style={{ position: isScrolled ? "sticky" : "static", top: 0 }}
    >
      <nav className="flex justify-between">
        <a className="cursor-pointer pr-4">
          <h1 className={`text-[40px] ${openNav ? "hidden" : ""}`}>
            <span className={`text-main`}>Moli</span>
            <span className={`${isScrolled ? "text-white" : ""}`}>nuevo</span>
          </h1>
        </a>
        <div
          className={`${
            openNav ? "h-screen w-full flex justify-center items-center" : ""
          } `}
        >
          <ul
            className={`lg:flex gap-6 md:text-[23px] md:items-center ${
              openNav
                ? "flex flex-col text-center text-[20px] text-black"
                : "hidden"
            } ${isScrolled ? "text-white" : ""}`}
          >
            <a
              className={`text-main cursor-pointer`}
              href="#home"
              onClick={() => setOpenNav(false)}
            >
              <li>Home</li>
            </a>
            <a
              className="cursor-pointer"
              href="#aboutme"
              onClick={() => setOpenNav(false)}
            >
              <li>About Me</li>
            </a>
            <a
              className="cursor-pointer"
              href="#skills"
              onClick={() => setOpenNav(false)}
            >
              <li>Skills</li>
            </a>
            <a
              className="cursor-pointer"
              href="#projects"
              onClick={() => setOpenNav(false)}
            >
              <li>Projects</li>
            </a>
            <a
              className="bg-main p-2 cursor-pointer text-white shadow-2xl"
              href="#contactme"
              onClick={() => setOpenNav(false)}
            >
              <li>Contact Me</li>
            </a>
            <LightModeDarkModeButton />
          </ul>
        </div>

        <button
          className={`lg:hidden text-[25px] text-main z-30 ${
            openNav ? "hidden" : ""
          }`}
          onClick={() => setOpenNav(true)}
        >
          <GiHamburgerMenu />
        </button>
        {openNav ? (
          <div className="absolute top-0 right-0 pr-8 z-30">
            <button
              className={`text-[25px] text-white pt-6`}
              onClick={() => setOpenNav(!openNav)}
            >
              X
            </button>
          </div>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
}
