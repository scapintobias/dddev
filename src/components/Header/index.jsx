import React from 'react';
import CN from 'classnames';
import {Link} from 'react-router-dom';

import {useExpanded} from '../../hooks/useExpanded';

import './style.css';

export function Header(props) {
  const [expanded, toggleExpanded] = useExpanded('.header .menu-icon');
  return (
    <>
      <header className={CN('header', {expanded})}>
        <Link to="/" className="logo">
          DisciplineDesign
        </Link>
        <div className="menu-icon" onClick={toggleExpanded}>
          <span className="navicon" />
        </div>
        <ul className="menu">
        <li>
          <Link to="/work">Case Studies</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
          <li>
          <a href="https://www.instagram.com/discipline.design" target="_blank">Photos</a>
          </li>
          <li>
            <a href="mailto:info@discipline.design?subject=Enquiry">
             <span className="f3-m f5 fw4 fw7-m">@</span></a>
          </li>
          <li className="pb3-m">
         <a href="https://www.linkedin.com/in/scapintobias" target="_blank">
         <span className="futurab f4 pb1 f3-m tracked">in</span></a>
         </li>
        </ul>
      </header>
      <div className="header-clearfix" />
    </>
  );
}
