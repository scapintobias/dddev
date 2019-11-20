import React from "react";
import { Link } from "react-router-dom";
import CN from "classnames";
import "../../tachyons.css";
import "./style.css";

export const Cell = ({
  link,
  title,
  subtitle,
  description,
  text,
  className
}) => (
  <Link to={link}>
    <div className={CN("flex justify-center", className)}>
      <div className="w-90 tc">
        <p className="b f6 pb3 helvetica">{title}</p>
        <h1 className="helvetica f2 b lh-leading pb3">{subtitle}</h1>
        <p className="pb1 pt3 f3 i caslon">{description}</p>
      </div>
    </div>
  </Link>
);

export const CellText = ({
  link,
  title,
  subtitle,
  description,
  text,
  className
}) => (
  <Link to={link}>
    <div className={CN("flex justify-center", className)}>
      <div className="w-90 tc">
        <p className="b f6 pb3 helvetica">{title}</p>
        <h1 className="helvetica f2 b lh-leading pb3">{subtitle}</h1>
        <p className="pb1 pt3 f3 i caslon">{description}</p>
        <p className="caslon pt5 w-80 center lh-solid f3">{text}</p>
      </div>
    </div>
  </Link>
);
