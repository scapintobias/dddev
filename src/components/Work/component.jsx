import React from "react";
import { Link } from "react-router-dom";
import CN from "classnames";
import "../../tachyons.css";
import "./style.css";
export const Grid = ({ children }) => <div className="grid">{children}</div>;

export const Cell = ({
  link,
  title,
  subtitle,
  description,
  text,
  className
}) => (
  <Link to={link}>
    <div className={CN("flex justify-center items-center item", className)}>
      <div className="w-80 tc">
        <p className="b ttu f6 helvetica">{title}</p>
        <h1 className="helvetica b lh-leading pv3">{subtitle}</h1>
        <p className="pb4 pt3 f3 i caslon">{description}</p>
        <p className="caslon w-90 center lh-solid f3">{text}</p>
      </div>
    </div>
  </Link>
);
