import React from 'react';
import './style.css';

export const ProjectNavigation = props => {
  const {title, subtitle, type, year} = props.project;

  return (
    <>
      <div className="project-navigation-wrapper">
        <div className="project-navigation">
          <div className="left">
            <a href="#">
              <img
                alt=""
                src="https://visualpharm.com/assets/73/Back%20Arrow-595b40b75ba036ed117d802d.svg"
              />
            </a>
          </div>

          <div id="titproj">
            <b style={{color: '#ef5419'}}>{title}</b>
            <i style={{color: '#ef5419'}}>{subtitle}</i>
            <b>{type}</b>{year}
          </div>

          <div className="right">
            <a href="#">
              <img
                alt=""
                src="https://visualpharm.com/assets/375/Forward%20Button-595b40b75ba036ed117d8440.svg"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="project-navigation-clearfix" />
    </>
  );
};
