const createProject = (title, subtitle, type, year, content) => ({
  title,
  subtitle,
  type,
  year,
  content
});

const createImage = (src, alt) => ({ src, alt });
const desc = text => ({});
const createContent = (
  headingImage,
  desc,
  imagesLeft,
  textRight,
  imagesBottom,
  imagesGrid = null
) => ({
  imagesGrid,
  headingImage,
  desc,
  imagesLeft,
  textRight,
  imagesBottom
});

const create4ImageGrid = (img1, img2, img3, img4) => ({
  img1,
  img2,
  img3,
  img4
});

export const projects = [
  createProject(
    "Heatwave",
    "Solutions",
    "ux",
    2018,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ]
    )
  ),
  createProject(
    "Pantone",
    "Cocktail solutions",
    "event",
    2018,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ]
    )
  ),
  createProject(
    "Pharma",
    "Packaging innovation",
    "pack",
    2017,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Mourn",
    "9/11",
    "poster",
    2016,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Ideascudo",
    "Gruppo Creamoda",
    "logo",
    2016,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Tokio 2020",
    "Olympics",
    "logo",
    2016,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Syneco",
    "Oil",
    "corporate",
    2016,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Joseph Müller-Brockmann",
    "Timeline",
    "poster",
    2016,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Parole Prigioniere",
    "Expo 2015",
    "exhibit",
    2015,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Parole Prigioniere",
    "Expo 2015",
    "photography",
    2015,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Borromeo5",
    "Restaurant",
    "corporate",
    2015,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Corte d’Arte",
    "Sbacon",
    "exhibit",
    2015,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Lockton",
    "Analitics Facility",
    "corporate",
    2014,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Young Frankenstein",
    "A movie in stills / Booklet",
    "print",
    2015,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Corte d’Arte",
    "Gallery",
    "corporate",
    2014,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Expo",
    "Milano 2015",
    "logo",
    2013,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "A century in prime numbers",
    "A handful of papers / Book",
    "print",
    2013,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Achille Castiglioni",
    "Archive",
    "corporate",
    2013,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Nociva",
    "Album Launch",
    "photography",
    2013,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "SteelTears",
    "Just an illusion / Booklet",
    "print",
    2012,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Rankin Paulston",
    "Design Studio",
    "corporate",
    2011,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Fearless",
    "We loved Helvetica, then Akzidenz happened",
    "poster",
    2013,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Hospital",
    "San Tommaso dei Battuti",
    "wayfinding",
    2011,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Villa Manin",
    "di Passariano",
    "poster",
    2011,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Demenego",
    "Optycs",
    "logo",
    2011,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "SAF",
    "Transport",
    "corporate",
    2011,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Villa Manin",
    "di Passariano",
    "corporate",
    2011,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Breakthrough",
    "University",
    "corporate",
    2010,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "DP",
    "Energy",
    "corporate",
    2010,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Richmond",
    "Helath Clinic",
    "logo",
    2010,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Hospital",
    "San Tommaso dei Battuti",
    "corporate",
    2009,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "A",
    "Single letter / Font",
    "print",
    2009,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Abstract",
    "Just a few lines",
    "poster",
    2009,
    createContent(
      createImage("https://placekitten.com/1500/1000", "Meow"),
      "blabla blqa la glad gdg",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      "blagrsigneri geog eojfg oefjg owj gowgj ",
      [
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      ],
      create4ImageGrid(
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow"),
        createImage("https://placekitten.com/500/300", "Meow"),
        createImage("https://placekitten.com/400/300", "Meow")
      )
    )
  ),
  createProject(
    "Craf Aldo Moro",
    "With Armando & Maurizio Milani",
    "corporate",
    2008,
    createContent(
      createImage(
        "http://discipline.design/archive/img/craf/craf_1.png",
        "logo"
      ),
      desc(
        "This logo and Corporate Image have been developed during a workshop with Armando Milani giving some fundamental theoric lessons, and his brother Maurizio focusing on the production compartment. The very limited group of people granted me the possibility to design it four-handedly in a very close collaboration with him. Funnily enough, this workshop should have been participated by Massimo Vignelli too, but for personal reason had to decline. Many people feel ashamed showing their first projects. I could dig more into the archives and find lots of logos from the 2006-2008 period, but they wouldn't be as meaningful as this. And the reason is quite clear. Before meeting with Armando and Maurizio, I had a very fond appreciacion of everything design-related, but I was skeptical about turning into the core business of my profession. So this, rather than the first project at all, is the first project I designed with DisciplineDesign in mind, and a remainder of a spectacular encounter, where my career started to shape."
      )
    )
  )
];