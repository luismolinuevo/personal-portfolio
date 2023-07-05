import React, { useState } from "react";
import { BsGithub, BsGlobe } from "react-icons/bs";

const ImageCard = ({ imageUrl, about, id, title, gitHub, liveLink }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="relative w-[450px] h-[450px] bg-cover bg-center rounded-lg overflow-hidden"
      style={{ backgroundImage: `url(${imageUrl})` }}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {hovered && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-main transition-opacity duration-300">
          <h1 className="text-white text-[30px] font-bold mb-4">{title}</h1>
          <p className="text-center pb-4">{about}</p>
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
  );
};

export default ImageCard;
