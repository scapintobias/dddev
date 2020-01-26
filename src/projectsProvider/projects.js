import {
  Heatwave,
  Pantone,
  Craf,
  Abstract,
  A,
  Hospital,
  Richmond
} from './content'

const createProject = ( title, subtitle, type, year, content ) => ( {
  title,
  subtitle,
  type,
  year,
  content
} );

export const projects = [
  createProject(
    "Metro de Lima",
    "Subway system",
    "wayfinding",
    2019,
    Pantone()
  ),
  createProject(
    "Mental Coach",
    "Corporate",
    "photography",
    2018,
    Heatwave()
  ),
  createProject(
    "Ducati 1260 Multistrada",
    "Ducati Link App",
    "video",
    2018,
    Heatwave()
  ),
  createProject(
    "Pantone",
    "Cocktail solutions",
    "event",
    2018,
    Pantone()
  ),
  createProject(
    "Junior Enterprise",
    "Corporate",
    "photography",
    2017,
    Pantone()
  ),
  createProject(
    "Mourn",
    "9/11",
    "poster",
    2016,
    Pantone()
  ),
  createProject(
    "Ideascudo",
    "Gruppo Creamoda",
    "logo",
    2016,
    Heatwave()
  ),
  createProject(
    "Tokio 2020",
    "Olympics",
    "logo",
    2016,
    Pantone()
  ),
  createProject(
    "Syneco",
    "Oil",
    "corporate",
    2016,
    Heatwave()
  ),
  createProject(
    "Joseph Müller-Brockmann",
    "Timeline",
    "poster",
    2016,
    Pantone()
  ),
  createProject(
    "Electoral campaign",
    "Superheroes",
    "photography",
    2015,
    Pantone()
  ),
  createProject(
    "Parole Prigioniere",
    "Expo 2015",
    "photography",
    2015,
    Pantone()
  ),
  createProject(
    "Borromeo5",
    "Restaurant",
    "corporate",
    2015,
    Heatwave()
  ),
  createProject(
    "Corte d’Arte",
    "Sbacon",
    "exhibit",
    2015,
    Pantone()
  ),

  createProject(
    "Corte d’Arte",
    "Gallery",
    "corporate",
    2014,
    Heatwave()
  ),
  createProject(
    "Expo",
    "Milano 2015",
    "logo",
    2013,
    Pantone()
  ),
  createProject(
    "Migrants",
    "Untold story",
    "print",
    2013,
    Heatwave()
  ),
  createProject(
    "A century in prime numbers",
    "A handful of papers / Book",
    "print",
    2013,
    Heatwave()
  ),
  createProject(
    "Achille Castiglioni",
    "Archive",
    "corporate",
    2013,
    Pantone()
  ),
  createProject(
    "Nociva",
    "Album Launch",
    "photography",
    2013,
    Heatwave()
  ),
  createProject(
    "SteelTears",
    "Just an illusion / Booklet",
    "print",
    2012,
    Pantone()
  ),
  createProject(
    "Rankin Paulston",
    "Design Studio",
    "corporate",
    2011,
    Heatwave()
  ),
  createProject(
    "Fearless",
    "We loved Helvetica, then Akzidenz happened",
    "poster",
    2011,
    Pantone()
  ),

  createProject(
    "Villa Manin",
    "di Passariano",
    "poster",
    2011,
    Pantone()
  ),

  createProject(
    "SAF",
    "Transport",
    "corporate",
    2011,
    Pantone()
  ),
  createProject(
    "Villa Manin",
    "di Passariano",
    "corporate",
    2011,
    Heatwave()
  ),

  createProject(
    "DP",
    "Energy",
    "corporate",
    2010,
    Heatwave()
  ),
  createProject(
    "Richmond",
    "Helath Clinic",
    "logo",
    2010,
    Richmond()
  ),
  createProject(
    "Hospital",
    "San Tommaso dei Battuti",
    "corporate",
    2009,
    Hospital()
  ),
  createProject(
    "A",
    "Single letter / Font",
    "print",
    2009,
    A()
  ),
  createProject(
    "Abstract",
    "Just a few lines",
    "poster",
    2009,
    Abstract()
  ),
  createProject(
    "Craf Aldo Moro",
    "With Armando & Maurizio Milani",
    "corporate",
    2008,
    Craf()
  ),
];