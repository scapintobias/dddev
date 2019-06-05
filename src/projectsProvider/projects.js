const createProject = (title, subtitle, type, desc, year, images) => ({
  title,
  subtitle,
  type,
  desc,
  year,
  images,
});

const createImage = (src, alt) => ({src, alt});

export const projects = [
  createProject("Corte D'Arte", 'Sbacon', 'Exhibit', 'blabla bla', 2015, []),
  createProject(
    'Lockton',
    'Analitics Facility',
    'Corporate Image',
    'blabla bla',
    2014,
    [
      createImage('https://placekitten.com/200/300', 'Meow'),
      createImage('https://placekitten.com/300/200', 'Meow2'),
    ],
  ),
  createProject(
    "Corte D'Arte",
    'Christmas Greetings',
    'Flyer',
    'blabla bla',
    2014,
    [],
  ),
];
