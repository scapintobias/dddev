import React from "react";
import { Link } from "react-router-dom";
import "../../tachyons.css";

import { projectTypes, getPrevAndNextProjects } from "../../projectsProvider";

export const ProjectNavigation = props => {
  const { title, subtitle, type, year } = props.project;
  const { prev, next } = getPrevAndNextProjects(props.project);

  return (
    <div className="pl3 pt2 pb2 bb b--black-30 flex flex-column">
      <b style={{ color: "#ef5419" }}>{title}</b>
      <i style={{ color: "#ef5419" }}>{subtitle}</i>
      <b>{projectTypes[type]}</b>
      {year}
    </div>
  );
};
