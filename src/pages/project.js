import React from 'react';
import {getProjectBySlug} from '../projectsProvider';

export function Project({match}) {
  const {title, subtitle, type, desc, year, images} = getProjectBySlug(
    match.params.slug,
  );
  return (
    <div>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        {type} - {year}
      </p>
      {images.map(image => (
        <img alt={image.alt} src={image.src} />
      ))}
      <p>{desc}</p>
    </div>
  );
}
