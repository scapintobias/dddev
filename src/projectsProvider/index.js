import {slugify} from '../utils';
import {projects} from './projects';

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug) {
  return projects.find(project => slugify(project.title) === slug);
}
