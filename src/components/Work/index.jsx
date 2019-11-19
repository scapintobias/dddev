import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "../../tachyons.css";
import { Grid } from "./grid.jsx";
import { Cell } from "./cell.jsx";

export function Tab() {
  return (
    <Grid>
      <Cell
        link="./"
        title="UX"
        subtitle="Metro de Lima"
        description="Wayfinding design"
        text="«La narrativa deve illuminaire, esplodere, ristorare. Non c'è alcuna filosofia morale nella narrativa oltre all'eccellenza. L'intensità della sensibilità e la rapidità le ho sempre ritenute. La gente cerca sempra la morale perché confonde narrative e filosofia»"
        className="hover-white bg-animate bt bl hover-bg-green fl w-50  pv5"
      />

      <Cell
        link="./"
        title="UX"
        subtitle="e-Novia"
        description="Wayfinding design"
        text="«La narrativa deve illuminaire, esplodere, ristorare. Non c'è alcuna filosofia morale nella narrativa oltre all'eccellenza. L'intensità della sensibilità e la rapidità le ho sempre ritenute. La gente cerca sempra la morale perché confonde narrative e filosofia»"
        className="hover-white bg-animate hover-bg-blue bl br bt fl w-50 pv5"
      />

      <Cell
        link="./"
        title="UX"
        subtitle="Trenitalia"
        description="Ticket totem redesign"
        text=""
        className="hover-white bg-animate hover-bg-blue bt bl bb fl w-25 pv5 mb1"
      />
      <Cell
        link="./"
        title="UI"
        subtitle="Metro de Lima"
        description="Wayfinding design"
        text=""
        className="hover-white bg-animate hover-bg-blue bb bl bt br fl w-75 pv5 mb1"
      />
    </Grid>
  );
}
