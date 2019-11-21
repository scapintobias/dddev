import React from "react";
import { Link } from "react-router-dom";
import "../../tachyons.css";
import "../../type.css";

import { Grid } from "./grid.jsx";
import { Cell } from "./cell.jsx";
import { CellText } from "./cell.jsx";
import { CellF } from "./cell.jsx";

export function Tab() {
  return (
    <Grid>
      <CellText
        link="./"
        title="UX"
        subtitle="Metro de Lima"
        description="Wayfinding design"
        text="«La narrativa deve illuminaire, esplodere, ristorare. Non c'è alcuna filosofia morale nella narrativa»"
        className="hover-white bg-animate b--silver hover-bg-green br-l bb-n-l bt bl bb br-m fl w-50 w-100-m w-100-l h8 pv5"
      />

      <CellText
        link="./"
        title="UX"
        subtitle="e-Novia"
        description="A sourceful experience"
        text="Where I learned to do research, to fail, to work as a team member, and when to shut up."
        className="hover-dark-blue bg-animate hover-bg-light-blue bl br bt bt-n-m bb b--silver fl w-50 w-100-m w-100-l pv5"
      />

      <CellF
        link="./"
        title="UX"
        subtitle="Trenitalia"
        description="Ticket totem redesign"
        className="hover-white bg-animate hover-bg-dark-blue bl bb b--silver bl br-m bb br-l mb0-l mb0-m fl w-25 w-100-m w-100-l pv5 mb1"
      />
      <Cell
        link="./"
        title="REACT"
        subtitle="DisciplineDesign"
        description="How I built this website"
        className="hover-orange bg-animate hover-bg-black-10 bb bl br b--silver fl w-75 w-100-m w-100-l pv5 mb1 mb3-m mb3-l"
      />
    </Grid>
  );
}
