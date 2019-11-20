import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "../../tachyons.css";
import { Grid } from "./grid.jsx";
import { Cell } from "./cell.jsx";
import { CellText } from "./cell.jsx";

export function Tab() {
  return (
    <Grid>
      <CellText
        link="./"
        title="UX"
        subtitle="Metro de Lima"
        description="Wayfinding design"
        text="«La narrativa deve illuminaire, esplodere, ristorare. Non c'è alcuna filosofia morale nella narrativa»"
        className="hover-white bg-animate bt bl hover-bg-green fl w-50 h8  pv5"
      />

      <CellText
        link="./"
        title="UX"
        subtitle="e-Novia"
        description="A sourceful experience"
        text="«Where I learned to do research, to fail, to work as a team member, and when to be quiet»"
        className="hover-white bg-animate hover-bg-blue bl br bt fl w-50 pv5"
      />

      <Cell
        link="./"
        title="UX"
        subtitle="Trenitalia"
        description="Ticket totem redesign"
        className="hover-white bg-animate hover-bg-blue bt bl bb fl w-25 pv5 mb1"
      />
      <Cell
        link="./"
        title="UI"
        subtitle="Metro de Lima"
        description="Wayfinding design"
        className="hover-white bg-animate hover-bg-blue bb bl bt br fl w-75 pv5 mb1"
      />
    </Grid>
  );
}
