import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

export default function ContactMe() {
    const [isError, setIsError] = useState(false);
    const [isGood, setIsGood] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
      setIsGood(false);
      setIsError(false);
  
      try {
        emailjs
          .sendForm('service_ifz1oqo', 'template_wm5gmpk', e.target, '2e4j5otUuU83ooFW_')
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
  
        e.target.reset();
        setIsGood(true);
      } catch {
        setIsError(true);
      }
    };
  
    return (
      <section id="contact-me">
        <div>
          <h1>Contact Me</h1>
          <h3>luismolinuevo0@gmail.com</h3>
          <div>
            <ul>
              <a href="https://www.linkedin.com/in/luismolinuevo/" target="_blank" rel="noopener noreferrer">
                <li>
                  <FaLinkedin />
                </li>
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <li>
                  <FaGithub />
                </li>
              </a>
              <a href="https://www.youtube.com/channel/UCRc-HqHUwj3obUnh4--flGQ" target="_blank" rel="noopener noreferrer">
                <li>
                  <FaYoutube />
                </li>
              </a>
            </ul>
          </div>
  
          <form onSubmit={sendEmail}>
            <input placeholder="Enter Name" type="text" name="name" />
            <input placeholder="Enter Subject" type="text" name="subject" />
            <input placeholder="Enter Email" type="email" name="email" />
            <textarea placeholder="Enter Message" name="message" />
            <input type="submit" value="Send" />
          </form>
  
          {isGood ? <div>Success!</div> : ''}
          {isError ? <div>Error</div> : ''}
        </div>
      </section>
    );
}
