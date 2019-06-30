import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';

export function Header(props) {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          DisciplineDesign
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon" />
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
      <div className="header-clearfix" />
    </>
  );
}
