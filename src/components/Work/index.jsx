import React from 'react';
import { Footer } from '../footer.jsx';
import { Grid } from './grid.jsx';
import { Cell } from './cell.jsx';
import { CellText } from './cell.jsx';
import { CellF } from './cell.jsx';

export function Tab() {
  return (
    <main>
      <Grid>
        <Cell
          link="/case-studies/metro-de-lima"
          title="UX"
          subtitle="Metro de Lima"
          description="Wayfinding design"
          text=""
          className="hover-white bg-animate b--navy hover-bg-red br-l bb-n-l bt bl bb br-m fl w-33 w-100-m w-100-l pv5"
        />

        <Cell
          link="#"
          title="UX"
          subtitle="Yape"
          description="Remote drone driving"
          className="hover-white-50 bg-animate hover-bg-navy bl br bt bt-n-m bb b--navy fl w-34 w-100-m w-100-l pv5"
        />
        <Cell
          link="#"
          title="UX"
          subtitle="Blimp"
          description="Ad data visualisation"
          className="hover-white-50 bg-animate hover-bg-navy bl-m bl-l br bt bt-n-m bb b--navy fl w-33 w-100-m w-100-l pv5"
        />
        <CellText
          link="/case-studies/eNovia"
          title="UX" navy
          subtitle="e-Novia"
          description="A sourceful experience"
          text="Where I learned how to drive drones, to pitch an idea to the CEO, and when to shut up."
          className="hover-near-white bg-animate hover-bg-dark-blue bl bb b--navy bl br-m bb br-l mb0-l mb0-m fl w-50 w-100-m w-100-l pv5 mb1"
        />
        <CellText
          link="./case-studies/DisciplineDesign"
          title="REACT"
          subtitle="DisciplineDesign"
          description="A design story"
          text="A life journey. The personal brand I founded, and how this website came to be."
          className="hover-orange bg-animate hover-bg-black-10 bb bl br b--navy fl w-50 w-100-m w-100-l pv5 mb1 mb3-m mb3-l"
        />

      </Grid>
    </main>
  );
}
