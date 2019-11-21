import React from "react";
import { Link } from "react-router-dom";
import "../../tachyons.css";
import "../../type.css";
import "./style.css";

import { Raster } from "./components.jsx";
import { Date } from "./components.jsx";
import { Title } from "./components.jsx";

export function Article() {
  return (
    <Raster>
      <Date place="Milano" time="MAY—NOV—2018" />
      <Title
        title="E-Novia"
        subtitle="The enterprise factory"
        description="A sourceful experience. Where I learned to do research, to fail, to work as a team member, and when to shut up."
      />
    </Raster>
  );
}
