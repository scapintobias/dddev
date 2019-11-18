import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "../../tachyons.css";
import { Grid, Cell } from "./component.jsx";

export function Tab() {
  return (
    <Grid>
      <Cell
        title="UX"
        subtitle="Metro de Lima"
        description="Wayfinding design"
      />
    </Grid>
  );
}
