import React from "react";
import ImageUrl from "../assets/ImageUrl.png";

export default function AboutMe() {
  return (
    <section className="px-[50px] py-6 md:px-[80px]">
      <h1 className="flex justify-center text-main text-[45px] font-bold ">
        About me
      </h1>
      <div className="flex justify-center">
        <div className="md:flex md:justify-between gap-64 font-bold">
          <div>
            <h1 className="text-[30px] text-main font-bold">Hello!</h1>
            <p className="text-[25px] leading-8">
              My name is Luis Molinuevo, a Web Developer. I'm
              <br /> currently a Computer Science senior at Lehman College.
              <br /> I'm also completed The Knowledge House Innovation and
              <br /> Cuny Tech Prep Fellowships. I use modern technologies like
              <br /> React and Express to build real world Full Stack
              <br /> applications.
            </p> 
          </div>

          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-main shadow-2xl mt-8 md:mt-0">
            <img
              className="w-full h-full object-center object-cover"
              src={ImageUrl}
              alt="Picture of me"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
