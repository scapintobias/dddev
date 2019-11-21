import React from "react";
import { ProjectNavigation } from "../components/ProjectNavigation";
import { ProjectContent } from "../components/ProjectContent";
import { getProjectByUrlParams } from "../projectsProvider";

export function Project({ match }) {
  const { type, year, slug } = match.params;
  const project = getProjectByUrlParams(type, year, slug);
  return project ? (
    <>
      <ProjectNavigation project={project} />
      <ProjectContent project={project} />
    </>
  ) : (
    <h2 style={{ padding: "1rem" }}>Project not found!</h2>
  );
}
