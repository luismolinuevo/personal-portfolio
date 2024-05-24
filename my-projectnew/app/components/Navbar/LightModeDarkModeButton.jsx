"use client";

import { useState, useEffect } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

export default function LightModeDarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  const handleClick = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

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
