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
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/preview">Preview</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </header>
      <div className="header-clearfix" />
    </>
  );
}
