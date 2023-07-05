import React from "react";
import ImageCard from "../components/ImageCard";
import projects from "../Projects";

export default function Projects() {
  return (
    <section className="px-[50px] py-6 md:px-[80px]">
      <div>
      <h1 className="flex justify-center text-main text-modileHeading md:text-heading font-bold py-6">
          Projects
        </h1>
        {
          projects && projects.length != 0 ? (
            projects.map((project) => (
              <div>
                <ImageCard about={project.about} title={project.name} id={project.id} gitHub={project.gitHub} liveLink={project.live}/>
              </div>
            ))
          ) : <p></p>
        }
      </div>
    </section>
  );
}
