import React from 'react';
import { Footer } from '../footer.jsx';
import { Grid } from './grid.jsx';
import { Cell } from './cell.jsx';
import { CellText } from './cell.jsx';
import { CellF } from './cell.jsx';

export function Tab() {
  return (
    <main className="min-vh-100">
      <Grid>
        <CellText
          link="./"
          title="UX"
          subtitle="Metro de Lima"
          description="Wayfinding design"
          text="«La narrativa deve illuminaire, esplodere, ristorare. Non c'è alcuna filosofia morale nella narrativa»"
          className="hover-white bg-animate b--navy hover-bg-dark-red br-l bb-n-l bt bl bb br-m fl w-50 w-100-m w-100-l h8 pv5"
        />

        <CellText
          link="/case-studies/eNovia"
          title="UX"
          subtitle="e-Novia"
          description="A sourceful experience"
          text="Where I learned to play as a team member, to pitch my idea to the CEO, and—vital—when to shut up."
          className="hover-silver bg-animate hover-bg-navy bl br bt bt-n-m bb b--navy fl w-50 w-100-m w-100-l pv5"
        />

        <CellF
          link="./"
          title="UX" navy
          subtitle="Trenitalia"
          description="Ticket totem redesign"
          className="hover-near-white bg-animate hover-bg-dark-blue bl bb b--navy bl br-m bb br-l mb0-l mb0-m fl w-25 w-100-m w-100-l pv5 mb1"
        />
        <Cell
          link="./case-studies/DisciplineDesign"
          title="REACT"
          subtitle="DisciplineDesign"
          description="How I built this website"
          className="hover-orange bg-animate hover-bg-black-10 bb bl br b--navy fl w-75 w-100-m w-100-l pv5 mb1 mb3-m mb3-l"
        />

      </Grid>
      <Footer />
    </main>
  );
}
