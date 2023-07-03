import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

//   useState(() => {
//       if (openNav) {
//         document.body.style.overflow = 'hidden'; // Disable scrolang
//       } else {
//         document.body.style.overflow = ''; // Enable scrolang
//       }
//     }, [openNav]);

  return (
    <header
      className={`w-full px-[50px] py-6 md:px-[80px] ${
        openNav ? "bg-main h-screen" : ""
      }`}
    >
      <nav className="flex justify-between">
        <a className="cursor-pointer"><h1 className={`text-[40px] ${openNav ? "hidden" : ""}`}><span className="text-main">Moli</span>nuevo</h1></a>
        <div
          className={`${
            openNav ? "h-screen w-full flex justify-center items-center" : ""
          } `}
        >
          <ul
            className={`md:flex gap-6 md:text-[23px] md:items-center ${
              openNav ? "flex flex-col text-center text-[20px] text-black" : "hidden"
            }`}
          >
            <a className="text-main cursor-pointer" onClick={() => setOpenNav(false)}>
              <li>Home</li>
            </a>
            <a className="cursor-pointer" href="#aboutme" onClick={() => setOpenNav(false)}>
              <li>About Me</li>
            </a>
            <a className="cursor-pointer" onClick={() => setOpenNav(false)}>
              <li>Skills</li>
            </a>
            <a className="cursor-pointer" onClick={() => setOpenNav(false)}>
              <li>Projects</li>
            </a>
            <a className="bg-main p-2 cursor-pointer text-white shadow-2xl" onClick={() => setOpenNav(false)}>
              <li>Contact Me</li>
            </a>
          </ul>
        </div>
        <button
          className={`md:hidden text-[25px] text-main ${openNav ? "hidden" : ""}`}
          onClick={() => setOpenNav(true)}
        >
          <GiHamburgerMenu />
        </button>
        {openNav ? (
          <div className="absolute top-0 right-0 pr-8">
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
