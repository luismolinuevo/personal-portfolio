import AboutMe from "./components/PageSections/Aboutme";
import Homepage from "./components/PageSections/Home";
import Skills from "./components/PageSections/Skills";
import Projects from "./components/PageSections/Projects";

export default function Home() {
  return (
    <div>
      <Homepage />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}
