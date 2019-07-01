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
    'Heatwave',
    'Solutions',
    'ux',
    2018,
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
    'Pantone',
    'Cocktail solutions',
    'event',
    2018,
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
    'Pharma',
    'Packaging innovation',
    'pack',
    2017,
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
  createProject(
    'Mourn',
    '9/11',
    'poster',
    2016,
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
  createProject(
    'Ideascudo',
    'Gruppo Creamoda',
    'logo',
    2016,
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
