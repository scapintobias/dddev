import {slugify} from '../utils';
import {projects} from './projects';

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug) {
  return projects.find(project => slugify(project.title) === slug);
}

export const projectTypes = {
  ux: 'UX',
  wayfinding: 'Wayfinding',
  event: 'Events',
  corporate: 'Corporate Image',
  logo: 'Logo',
  poster: 'Poster',
  pack: 'Packaging',
  exhibit: 'Exhibit',
  photography: 'Photography',
  print: 'Print',
};
