import React from 'react';
import {ProjectNavigation} from '../components/ProjectNavigation';
import {ProjectContent} from '../components/ProjectContent';
import {getProjectBySlug} from '../projectsProvider';

export function Project({match}) {
  const project = getProjectBySlug(match.params.slug);
  return (
    <>
      <ProjectNavigation project={project} />
      <ProjectContent project={project} />
    </>
  );
}
