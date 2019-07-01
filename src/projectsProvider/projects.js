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
  createProject(
    'Tokio 2020',
    'Olympics',
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
  createProject(
    'Syneco',
    'Oil',
    'corporate',
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
    'Joseph Müller-Brockmann',
    'Timeline',
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
    'Parole Prigioniere',
    'Expo 2015',
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
      create4ImageGrid(
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
      ),
    ),
  ),
  createProject(
    'Parole Prigioniere',
    'Expo 2015',
    'photography',
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
      create4ImageGrid(
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
      ),
    ),
  ),
  createProject(
    'Borromeo5',
    'Restaurant',
    'corporate',
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
      create4ImageGrid(
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
      ),
    ),
  ),
  createProject(
    'Corte d’Arte',
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
      create4ImageGrid(
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
      ),
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
      create4ImageGrid(
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
      ),
    ),
  ),
  createProject(
    'Young Frankenstein',
    'A movie in stills / Booklet',
    'print',
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
      create4ImageGrid(
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
      ),
    ),
  ),
  createProject(
    'Corte d’Arte',
    'Gallery',
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
      create4ImageGrid(
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
        createImage('https://placekitten.com/500/300', 'Meow'),
        createImage('https://placekitten.com/400/300', 'Meow'),
      ),
    ),
  ),
  createProject(
      'Expo',
      'Milano 2015',
      'logo',
      2013,
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
          'A century in prime numbers',
          'A handful of papers / Book',
          'print',
          2013,
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
            'Achille Castiglioni',
            'Archive',
            'corporate',
            2013,
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
