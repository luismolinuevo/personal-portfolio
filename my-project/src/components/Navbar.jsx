import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  // useState(() => {
  //     if (openNav) {
  //       document.body.style.overflow = 'hidden'; // Disable scrolling
  //     } else {
  //       document.body.style.overflow = ''; // Enable scrolling
  //     }
  //   }, [openNav]);

  return (
    <header
      className={`w-full px-[50px] py-6 md:px-[80px] ${
        openNav ? "bg-[#05aff2] h-screen" : ""
      }`}
    >
      <nav className="flex justify-between">
        <h1 className={`${openNav ? "hidden" : ""}`}>Molinuevo</h1>
        <div
          className={`${
            openNav ? "h-screen w-full flex justify-center items-center" : ""
          } `}
        >
          <ul
            className={`md:flex ${
              openNav ? "flex flex-col text-center" : "hidden"
            }`}
            // className={`${
            //     openNav ? "md:flex" : "hidden md:flex"
            //   } flex-col text-center md:flex-row`}
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact Me</a>
            </li>
          </ul>
        </div>
        <button
          className={`md:hidden ${openNav ? "hidden" : ""}`}
          onClick={() => setOpenNav(true)}
        >
          <RxHamburgerMenu />
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
