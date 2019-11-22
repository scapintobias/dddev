import React from 'react';
import './style.css';

import { Date, Raster, Title } from './components.jsx';

export function Enovia() {
  return (
    <Raster>
      <Date place="Milano" time="MAY—NOV—2018" />
      <Title
        title="E-Novia"
        subtitle="The enterprise factory"
        description="A sourceful experience."
        line2="Where I learned to do research, to fail, to work as a team member, and when to shut up."
      />
    </Raster>
  );
}
