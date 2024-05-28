"use client";

import { useState, useEffect } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

export default function LightModeDarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const isDarkMode = savedMode === "true";
    setDarkMode(isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleClick = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button onClick={handleClick} className="cursor-pointer z-30" title="lightmode/darkmode">
      {darkMode ? (
        <MdDarkMode className="text-main cursor-pointer text-[25px] lg:text-[30px]" />
      ) : (
        <MdOutlineLightMode className="text-main cursor-pointer text-[25px] lg:text-[30px]" />
      )}
    </button>
  );
}
