"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

export default function ContactMe() {
  const [isError, setIsError] = useState(false);
  const [isGood, setIsGood] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsGood(false);
    setIsError(false);

    emailjs
      .sendForm(
        "service_ifz1oqo",
        "template_wm5gmpk",
        e.target,
        "2e4j5otUuU83ooFW_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsGood(true);
        },
        (error) => {
          console.log(error.text);
          setIsError(true);
        }
      );

    e.target.reset();
  };

  useEffect(() => {
    if (isGood) {
      const timer = setTimeout(() => {
        setIsGood(false);
      }, 3000); // Clear the success message after 3 seconds

      return () => clearTimeout(timer); // Clear the timer if the component unmounts or if isGood changes
    }
  }, [isGood]);

  return (
    <section className="px-[50px] py-20 md:px-[80px] mb-[70px] text-secondary" id="contactme">
      <div className="flex justify-center text-center">
        <div className="flex flex-col">
          <h1 className="flex justify-center text-main text-modileHeading md:text-heading font-bold py-6">
            Contact Me
          </h1>
          <div className="bg-main p-12 rounded-xl">
            <a
              href="mailto:luismolinuevo0@gmail.com"
              className="text-[20px] md:text-[30px]"
            >
              luismolinuevo0@gmail.com
            </a>
            <div className="flex justify-center">
              <ul className="flex gap-1 text-[30px] text-white mb-6">
                <a
                  href="https://www.linkedin.com/in/luismolinuevo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="linkedin"
                >
                  <li>
                    <FaLinkedin />
                  </li>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Github"
                >
                  <li>
                    <FaGithub />
                  </li>
                </a>
              </ul>
            </div>

            <form onSubmit={sendEmail} className="flex flex-col gap-2">
              <input
                placeholder="Enter Name"
                type="text"
                name="name"
                className="md:w-[650px] outline-none p-1 rounded-sm shadow-2xl"
              />
              <input
                placeholder="Enter Subject"
                type="text"
                name="subject"
                className="md:w-[650px] outline-none p-1 rounded-sm shadow-2xl"
              />
              <input
                placeholder="Enter Email"
                type="email"
                name="email"
                className="md:w-[650px] outline-none p-1 rounded-sm shadow-2xl"
              />
              <textarea
                placeholder="Enter Message"
                name="message"
                className="md:w-[650px] md:h-[150px] h-[120px] outline-none p-1 rounded-sm shadow-2xl"
              />
              <div>
                <input
                  type="submit"
                  value="Send"
                  className="my-2 bg-white md:w-[200px] p-[7px] cursor-pointer"
                />
              </div>
            </form>

            {isGood ? <div>Success!</div> : ""}
            {isError ? <div>Error</div> : ""}
          </div>
        </div>
      </div>
    </section>
  );
}
