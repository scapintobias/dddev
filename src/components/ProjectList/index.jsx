import React from "react";
import {Link} from "react-router-dom";

import {slugify} from "../../utils";
import {getAllProjects, projectTypes} from "../../projectsProvider";

import "./style.css";

const projects = getAllProjects();

export const ProjectList = props => (
	<ul className="projects-list">
		{projects
			.filter(project => (props.type ? project.type === props.type : true))
			.map((project, key) => (
				<Link
					key={key}
					to={`/projects/${slugify(project.type)}/${project.year}/${slugify(
						project.title
					)}`}
				>
					<li>
						<span className="title">
							<b>{project.title}</b>
							<br />
							{project.subtitle}
						</span>
						<span className="type">{projectTypes[project.type]}</span>
						<span className="year">{project.year}</span>
					</li>
				</Link>
			))}
	</ul>
);
