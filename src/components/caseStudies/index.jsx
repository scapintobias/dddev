import React from "react";
import { Link } from "react-router-dom";
import "../../tachyons.css";
import "../../type.css";
import "./style.css"

import { Raster } from "./components.jsx"
import { Date } from "./components.jsx"
import { Title } from "./components.jsx"

export function Article() {
  return (
     <Raster>
     <Date
     place="Milano"
     time="MAY—NOV—2018"
     />
      <Title
        title="E-Novia"
        subtitle="Metro de Lima"
        description="Wayfinding design"
      />
      </Raster>
   );
};
