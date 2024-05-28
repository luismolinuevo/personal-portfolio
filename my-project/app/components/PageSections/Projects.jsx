"use client";

import ImageCard from "../General/ImageCard";
import projects from "@/app/lib/Projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="py-20 md:px-[80px]" id="projects">
      <div>
        <h1 className="flex justify-center text-main text-modileHeading md:text-heading font-bold py-6">
          Projects
        </h1>
        <div className="flex flex-wrap justify-center gap-12">
          {projects && projects.length != 0 ? (
            projects.slice(0, 3).map((project) => (
              <div className="w-full md:w-auto px-4" key={project.id}>
                <ImageCard
                  about={project.about}
                  title={project.name}
                  id={project.id}
                  gitHub={project.gitHub}
                  liveLink={project.live}
                  imageUrl={project.img}
                  stack={project.techStack}
                />
              </div>
            ))
          ) : (
            <p>No projects available.</p>
          )}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/project">
            <button className="bg-main text-white px-4 py-2 rounded-md">
              Load More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
