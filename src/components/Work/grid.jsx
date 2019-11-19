import React from "react";
import { Link } from "react-router-dom";
import CN from "classnames";
import "./style.css";
import "../../tachyons.css";

export const Grid = ({ children }) => (
  <div className="mw8 mauto pt3">{children}</div>
);
