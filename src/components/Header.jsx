import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export function Header(props) {

  return (
    <header className="header">
      <Link to="/" className="logo">
        DisciplineDesign
      </Link>

      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon">
      <FontAwesomeIcon icon={faBars} size="2x"/>
        </span>

      </label>
      <ul className="menu">
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/preview">Preview</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </header>
  );
}
