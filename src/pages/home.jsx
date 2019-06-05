import React from 'react';
import {Link} from 'react-router-dom';
import {slugify} from '../utils';
import {getAllProjects} from '../projectsProvider';

const projects = getAllProjects();

export function Home() {
  return (
    <ul>
      {projects.map(project => (
        <li>
          <Link to={`/projects/${slugify(project.title)}`}>
            {project.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
