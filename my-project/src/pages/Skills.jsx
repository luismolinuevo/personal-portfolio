import React from "react";
import { FaReact, FaGitSquare } from "react-icons/fa";
import {
  DiJava,
  DiJavascript1,
  DiCss3,
  DiHtml5,
  DiMongodb,
  DiNodejs,
} from "react-icons/di";
import {
  SiSequelize,
  SiExpress,
  SiPrisma,
  SiTailwindcss,
  SiSocketdotio,
  SiRedux,
} from "react-icons/si";

export default function Skills() {
  return (
    <section className="px-[50px] py-20 md:px-[80px]" id="skills">
      <div>
        <h1 className="flex justify-center text-main text-modileHeading md:text-heading font-bold py-6">
          Skills
        </h1>
        <div className="text-[18px] md:text-[20px] flex justify-center">
          <div className="flex flex-wrap w-full md:w-[800px] gap-3 md:gap-6 justify-center">
          <div className="text-center">
            <FaReact className="text-[50px]"/>
            <p className="text-center">React.js</p>
          </div>
          <div>
            <SiRedux className="m-auto text-[50px]"/>
            <p className="text-center">Redux</p>
          </div>
          <div>
            <SiTailwindcss className="m-auto text-[50px]"/>
            <p className="text-center">TailwindCSS</p>
          </div>
          <div>
            <SiExpress className="m-auto text-[50px]"/>
            <p className="text-center">Express</p>
          </div>
          <div>
            <DiNodejs className="m-auto text-[50px]"/>
            <p className="text-center">NodeJS</p>
          </div>
          <div>
            <SiSocketdotio className="m-auto text-[50px]"/>
            <p className="text-center">Socket.io</p>
          </div>
          <div>
            <DiMongodb className="m-auto text-[50px]"/>
            <p className="text-center">Mongo</p>
          </div>
          <div>
            <SiPrisma className="m-auto text-[50px]"/>
            <p className="text-center">Prisma</p>
          </div>
          <div>
            <SiSequelize className="m-auto text-[50px]"/>
            <p className="text-center">Sequelize</p>
          </div>
          <div>
            <DiJavascript1 className="m-auto text-[50px]"/>
            <p className="text-center">JS</p>
          </div>
          <div>
            <DiJava className="m-auto text-[50px]"/>
            <p className="text-center">Java</p>
          </div>
          <div>
            <DiHtml5 className="m-auto text-[50px]"/>
            <p className="text-center">HTML</p>
          </div>
          <div>
            <DiCss3 className="m-auto text-[50px]"/>
            <p className="text-center">CSS</p>
          </div>
          <div>
            <FaGitSquare className="m-auto text-[50px]"/>
            <p className="text-center">Git</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
