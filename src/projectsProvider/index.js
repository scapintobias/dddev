import {slugify} from '../utils';
import {projects} from './projects';

export function getAllProjects() {
  return projects;
}

export function getProjectByUrlParams(type, year, slug) {
  return projects.find(
    project =>
      slugify(project.title) === slug &&
      project.year === Number(year) &&
      slugify(project.type) === type,
  );
}

export const projectTypes = {
  ux: 'UX',
  wayfinding: 'Wayfinding',
  event: 'Events',
  corporate: 'Corporate Image',
  poster: 'Poster',
  pack: 'Packaging',
  exhibit: 'Exhibit',
  photography: 'Photography',
  print: 'Print',
};