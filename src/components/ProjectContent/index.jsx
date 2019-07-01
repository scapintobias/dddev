import React from 'react';

import {Image} from '../Image';

import './style.css';

export function ProjectContent({project}) {
  const {title, subtitle, type, year, content} = project;
  const {headingImage} = content;
  return (
    <div className="project-container">
      <Image {...headingImage} className="image" />
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        {type} - {year}
      </p>
    </div>
  );
}
