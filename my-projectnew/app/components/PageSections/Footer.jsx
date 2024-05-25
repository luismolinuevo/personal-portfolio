import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsFillFileEarmarkFill,
  BsYoutube,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-main w-full text-white">
      <div className="p-4">
        <div className="flex gap-2 justify-center">
          <a
            href="https://github.com/luismolinuevo"
            target="_blank"
            className="cursor-pointer text-[30px]"
            title="github"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/luismolinuevo/"
            target="_blank"
            className="cursor-pointer text-[30px]"
            title="linkedin"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.youtube.com/@luiscodes5533"
            target="_blank"
            className="cursor-pointer text-[30px]"
            title="youtube"
          >
            <BsYoutube />
          </a>
          <a
            href={"/Resume.pdf"}
            target="blank_"
            className="cursor-pointer  text-[30px]"
            title="resume"
          >
            <BsFillFileEarmarkFill />
          </a>
        </div>
        <p className="text-center  text-[20px]">@ Luis Molinuevo 2023</p>
      </div>
    </footer>
  );
}
