import React from 'react';

import {projectTypes} from '../../projectsProvider';
import {ArrowLeft, ArrowRight} from '../../icons';

import './style.css';

export const ProjectNavigation = props => {
  const {title, subtitle, type, year} = props.project;

  return (
    <>
      <div className="project-navigation-wrapper">
        <div className="project-navigation">
          <a className="arrow left" href="#left">
            <ArrowLeft />
          </a>

          <div id="titproj">
            <b style={{color: '#ef5419'}}>{title}</b>
            <i style={{color: '#ef5419'}}>{subtitle}</i>
            <b>{projectTypes[type]}</b>
            {year}
          </div>

          <a className="arrow right" href="#right">
            <ArrowRight />
          </a>
        </div>
      </div>
      <div className="project-navigation-clearfix" />
    </>
  );
};
