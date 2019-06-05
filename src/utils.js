import slug from 'slugify';

export function slugify(str) {
  return slug(str, {lower: true, remove: /[*+~.()'"!:@]/g});
}
