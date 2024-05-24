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
    try {
      if (projectId) {
        const filteredProject = projects.filter(
          (project) => project.id == projectId
        );
        setProject(filteredProject);
      }
    } catch (error) {
      console.error("Unable to get project");
    }
  }, [projectId]);

  return <div></div>;
}
