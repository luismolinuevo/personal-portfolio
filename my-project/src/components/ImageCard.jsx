import React, { useState } from "react";

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
          <h3 className="text-white text-xl font-bold mb-4">Buttons/Text</h3>
          <button className="bg-white text-blue-500 py-2 px-4 rounded-lg mb-2">
            Button 1
          </button>
          <button className="bg-white text-blue-500 py-2 px-4 rounded-lg">
            Button 2
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
