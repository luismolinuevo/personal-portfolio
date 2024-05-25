"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import projects from "@/app/lib/Projects";

export default function page() {
  const router = useRouter();
  const params = useParams();
  const projectId = params.projectId;

  const [project, setProject] = useState(null);

  useEffect(() => {
    const getProject = async () => {
      try {
        if (projectId) {
          const filteredProject = projects.filter(
            (project) => project.id == projectId
          );
          setProject(filteredProject[0]);
        }
      } catch (error) {
        console.error("Unable to get project");
      }
    };

    getProject();
  }, [projectId]);

  if (!project) {
    return <div>Loading...</div>;
  }

  console.log(project);

  return (
    <div className="px-[50px] md:px-[80px] py-12">
      <h1 className="text-center text-heading text-main font-bold underline pb-2">
        {project?.name}
      </h1>
      <h2 className="text-[40px] text-main font-bold pb-2">
        Status:{" "}
        <span className="text-black font-normal">{project?.status}</span>
      </h2>
      <h2 className="text-[40px] text-main font-bold pb-2">What I built?</h2>
      <p className="text-[20px] md:text-[24px] md:leading-8">
        {project?.about}
      </p>
      <h2 className="text-[40px] text-main font-bold pb-2">Whats I used?</h2>
      <p className="text-[20px] md:text-[24px] md:leading-8">
        {project?.techStack}
      </p>
      <div className="mt-6 flex gap-6">
        <a
          href={project?.gitHub}
          className="bg-main text-white p-2 md:p-3 text-xl cursor-pointer"
        >
          Github
        </a>
        {project?.live && (
          <a
            href={project?.live}
            className="border-2 border-main p-2 md:p-3 text-main text-xl cursor-pointer"
          >
            Live Site
          </a>
        )}
      </div>
    </div>
  );
}
