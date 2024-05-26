"use client";

import React, { useState } from "react";
import { BsGithub, BsGlobe } from "react-icons/bs";
import Link from "next/link";

const ImageCard = ({ imageUrl, about, id, title, gitHub, liveLink, stack }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div>
      <h1 className="text-center text-[35px] text-main font-bold pb-2">{title}</h1>
      <Link href={`/project/${id}`}>
        <div
          className="relative w-full md:w-[420px] h-[450px] md:h-[400px] bg-center bg-cover  rounded-lg overflow-hidden shadow-2xl"
          style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: "center" }}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          {hovered && (
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-main transition-opacity duration-300 px-4">
              <h1 className="text-white text-[30px] font-bold mb-2">{title}</h1>
              <p className="text-center text-lg pb-4">{about}</p>
              <p className="text-white text-center text-xl pb-4">{stack}</p>
              <div className="flex gap-2 flex-wrap justify-center items-center text-secondary">
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[30px]"
                    title="website"
                  >
                    <BsGlobe />
                  </a>
                )}
                {gitHub && (
                  <a
                    href={gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[30px]"
                    title="github"
                  >
                    <BsGithub />
                  </a>
                )}
                <Link href={`/project/${id}`} className="bold text-secondary">More Info</Link>
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ImageCard;
