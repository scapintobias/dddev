import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "../../tachyons.css";
import { Grid, Cell } from "./component.jsx";

export function Tab() {
  return (
    <Grid>
      <Cell
        link="./"
        title="UX"
        subtitle="Metro de Lima"
        description="Wayfinding design"
        className="hover-white bg-animate hover-bg-green item-b pv4"
      />

      <Cell
        link="./"
        title="UX"
        subtitle="Metro de Lima"
        description="Wayfinding design"
        text="«La narrativa deve illuminaire, esplodere, ristorare. Non c'è alcuna filosofia morale nella narrativa oltre all'eccellenza. L'intensità della sensibilità e la rapidità le ho sempre ritenute. La gente cerca sempra la morale perché confonde narrative e filosofia»"
        className="hover-white bg-animate  hover-bg-blue item-c pv5"
      />
      <clearfix />
      <Cell
        link="./"
        title="UX"
        subtitle="Metro de Lima"
        description="Wayfinding design"
        className="hover-white bg-animate hover-bg-blue item-d pv4"
      />
      <Cell
        link="./"
        title="UX"
        subtitle="Metro de Lima"
        description="Wayfinding design"
        className="hover-white bg-animate hover-bg-blue item-e pv4"
      />

      <Cell
        link="./"
        title="UX"
        subtitle="Metro de Lima"
        description="Wayfinding design"
        className="hover-white bg-animate hover-bg-blue item-f pv4"
      />
      <Cell
        link="./"
        title="UX"
        subtitle="Metro de Lima"
        description="Wayfinding design"
        className="hover-white bg-animate hover-bg-blue item-g pv4"
      />
      <Cell
        link="./"
        title="UX"
        subtitle="Metro de Lima"
        description="Wayfinding design"
        className="hover-white bg-animate hover-bg-blue item-h pv4"
      />
    </Grid>
  );
}
