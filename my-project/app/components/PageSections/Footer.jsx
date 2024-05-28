import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsFillFileEarmarkFill,
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
            href={"/Resume.pdf"}
            target="blank_"
            className="cursor-pointer  text-[30px]"
            title="resume"
          >
            <BsFillFileEarmarkFill />
          </a>
        </div>
        <p className="text-center  text-[20px]">CopyRight @ Luis Molinuevo 2024</p>
      </div>
    </footer>
  );
}
