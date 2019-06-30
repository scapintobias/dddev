const createProject = (title, subtitle, type, year, content) => ({
  title,
  subtitle,
  type,
  year,
  content,
});

const createImage = (src, alt) => ({src, alt});

const createContent = (
  headingImage,
  desc,
  imagesLeft,
  textRight,
  imagesBottom,
  imagesGrid = null,
) => ({
  imagesGrid,
  headingImage,
  desc,
  imagesLeft,
  textRight,
  imagesBottom,
});

const create4ImageGrid = (img1, img2, img3, img4) => ({
  img1,
  img2,
  img3,
  img4,
});

export const projects = [
  createProject(
    "Corte D'Arte",
    'Sbacon',
    'exhibit',
    2015,
    createContent(
      createImage('https://placekitten.com/1500/1000', 'Meow'),
      'blabla blqa la glad gdg',
      [
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
      ],
      'blagrsigneri geog eojfg oefjg owj gowgj ',
      [
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
      ],
    ),
  ),
  createProject(
    'Lockton',
    'Analitics Facility',
    'corporate',
    2014,
    createContent(
      createImage('https://placekitten.com/1500/1000', 'Meow'),
      'blabla blqa la glad gdg',
      [
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
      ],
      'blagrsigneri geog eojfg oefjg owj gowgj ',
      [
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
      ],
    ),
  ),
  createProject(
    "Corte D'Arte",
    'Christmas Greetings',
    'print',
    2014,
    createContent(
      createImage('https://placekitten.com/1500/1000', 'Meow'),
      'blabla blqa la glad gdg',
      [
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
      ],
      'blagrsigneri geog eojfg oefjg owj gowgj ',
      [
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
      ],
      create4ImageGrid(
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
      ),
    ),
  ),
];
