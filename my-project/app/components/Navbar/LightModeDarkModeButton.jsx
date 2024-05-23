"use client";

import { useState } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

export default function LightModeDarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
    // localStorage.set("darkMode", darkMode)
  }
  return (
    <div>
      {darkMode ? (
        <MdDarkMode
          className="text-main cursor-pointer text-[30px]"
          onClick={handleClick}
        />
      ) : (
        <MdOutlineLightMode
          className="text-main cursor-pointer text-[30px]"
          onClick={handleClick}
        />
      )}
    </div>
  );
}
