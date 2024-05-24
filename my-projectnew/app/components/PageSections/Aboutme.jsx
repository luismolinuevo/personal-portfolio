import React from "react";

export default function AboutMe() {
  return (
    <section className="px-[50px] py-20 block md:px-[80px] " id="aboutme">
      <h1 className="flex justify-center text-main text-modileHeading md:text-heading font-bold py-6 ">
        About me
      </h1>
      <div className="flex justify-center">
        <div className="lg:flex md:justify-between 2xl:gap-64 font-bold">
          <div className="">
            <h1 className="text-[25px] md:text-[34px] text-main font-bold">
              Hello!
            </h1>
            <p className="w-full lg:w-[500px] xl:w-[700px] text-[20px] md:text-[24px] md:leading-8">
              I'm Luis Molinuevo, a Fullstack Engineer fueled by a passion for
              problem-solving. With a Bachelor of Science in Computer Science
              from Lehman College and experience from The Knowledge House and
              CUNY Tech Prep web developement fellowships, I excel in full-stack
              development.
            </p>
            <p className="w-full lg:w-[500px] xl:w-[700px] text-[20px] md:text-[24px] md:leading-8 pt-4">
              Currently volunteering at the Murphy Charitable Foundation, I'm
              developing an app connecting global communities with children in
              Africa. Previously, I honed my skills as a Full Stack Web
              Developer, crafting user-friendly experiences and optimizing
              backend APIs.
            </p>
          </div>
          <div className="flex justify-center items-center lg:justify-end">
            <div className="flex-col">
              <div className="w-72 h-72 2l:w-80 2l:h-80 rounded-full overflow-hidden border-4 border-main shadow-2xl mt-8 md:mt-0">
                <img
                  className="w-full h-full object-center object-cover"
                  src={"/ImageUrl.png"}
                  alt="Picture of me"
                />
              </div>
              <div className="flex justify-center mt-3">
                <button>Ask chabot about me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
