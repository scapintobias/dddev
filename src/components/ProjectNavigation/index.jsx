import React from 'react';
import {ArrowLeft, ArrowRight} from './arrows';
import {projectTypes} from '../../projectsProvider';
import './style.css';

export const ProjectNavigation = props => {
  const {title, subtitle, type, year} = props.project;

  return (
    <>
      <div className="project-navigation-wrapper">
        <div className="project-navigation">
          <a className="arrow left" href="#">
            <ArrowLeft />
          </a>

          <div id="titproj">
            <b style={{color: '#ef5419'}}>{title}</b>
            <i style={{color: '#ef5419'}}>{subtitle}</i>
            <b>{projectTypes[type]}</b>
            {year}
          </div>

          <a className="arrow right" href="#">
            <ArrowRight />
          </a>
        </div>
      </div>
      <div className="project-navigation-clearfix" />
    </>
  );
};
