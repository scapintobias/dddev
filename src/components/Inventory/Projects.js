import React from 'react';

export function createData(project: string, desc: string, field: string, year: number) {
  return { project, desc, field, year };
}
export const rows = [
  createData('Pantone', 'Cocktail solutions', 'Event', 2018),
  createData('Pharma', 'Packaging innovation', 'Packaging', 2017),
  createData('Pharma', 'Packaging innovation', 'Packaging', 2017),
  createData('Pharma', 'Packaging innovation', 'Packaging', 2017)
];
