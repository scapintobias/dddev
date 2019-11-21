import React from "react";
import CN from "classnames";
import { Link } from "react-router-dom";

import { useExpanded } from "../../hooks/useExpanded";

import "./style.css";
import "../../tachyons.css";
import "../../type.css";

export function Header(props) {
  const [expanded, toggleExpanded] = useExpanded(".header .menu-icon");
  return (
    <>
      <header className={CN("header helvetica", { expanded })}>
        <Link to="/" className="logo helvetica">
          DisciplineDesign
        </Link>
        <div className="menu-icon" onClick={toggleExpanded}>
          <span className="navicon" />
        </div>
        <ul className="fw5 fw4-m menu">
          <li className="f3-m">
            <Link to="/work">Case Studies</Link>
          </li>
          <li className="f3-m">
            <Link to="/about">About</Link>
          </li>
          <li className="f3-m">
            <a
              href="https://www.instagram.com/discipline.design"
              target="_blank"
            >
              Photos
            </a>
          </li>
          <li className="pt2-m pb2-m">
            <a href="mailto:info@discipline.design?subject=Enquiry">
              <span className="helvetica  f3-m f5 fw4 fw5-m">@</span>
            </a>
          </li>
          <li className="pb3-m pt2-m">
            <a href="https://www.linkedin.com/in/scapintobias" target="_blank">
              <span className="futurab f4 pb1 f2-m tracked">in</span>
            </a>
          </li>
        </ul>
      </header>
      <div className="header-clearfix" />
    </>
  );
}
