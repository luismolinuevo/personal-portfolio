import React, { useState } from "react";
import { BsGithub, BsGlobe } from "react-icons/bs";

const ImageCard = ({ imageUrl, about, id, title, gitHub, liveLink, stack }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    // <div className="flex justify-center">
    <div
      className="relative w-full md:w-[420px] h-[450px] md:h-[400px] bg-cover bg-center rounded-lg overflow-hidden"
      style={{ backgroundImage: `url(${imageUrl})` }}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {hovered && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-main transition-opacity duration-300 px-4">
          <h1 className="text-white text-[30px] font-bold mb-2">{title}</h1>
          <p className="text-center text-lg pb-4">{about}</p>
          <p className="text-white text-center text-xl pb-4">{stack}</p>
          <div className="flex gap-2">
            <a href={gitHub} target="_blank" className="text-[30px]">
              <BsGlobe />
            </a>
            <a href={liveLink} target="_blank" className="text-[30px]">
              <BsGithub />
            </a>
          </div>
        </div>
      )}
    </div>
    // </div>
  );
};

export default ImageCard;
