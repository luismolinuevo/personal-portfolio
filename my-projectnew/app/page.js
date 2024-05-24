import AboutMe from "./components/PageSections/Aboutme";
import Homepage from "./components/PageSections/Home";
import Skills from "./components/PageSections/Skills";

export default function Home() {
  return (
    <div>
      <Homepage />
      <AboutMe />
      <Skills />
    </div>
  );
}
