import React, {useState, useEffect} from 'react';
import CN from 'classnames';
import {Link} from 'react-router-dom';

import './style.css';

export function Header(props) {
  const [expanded, setExpanded] = useState(false);
  const handleMenuTap = () => setExpanded(!expanded);
  useEffect(() => {
    const listener = e =>
      e.target !== document.querySelector('.menu-icon') && setExpanded(false);
    document.body.addEventListener('click', listener);
    return () => document.body.removeEventListener('click', listener);
  });
  return (
    <>
      <header className={CN('header', {expanded})}>
        <Link to="/" className="logo">
          DisciplineDesign
        </Link>
        <div className="menu-icon" onClick={handleMenuTap}>
          <span className="navicon" />
        </div>
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
