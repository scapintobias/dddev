import React from "react";
import { Link } from "react-router-dom";
import "../../tachyons.css";

export const Grid = ({ children }) => <div className="grid">{children}</div>;

export const Cell = ({ title, subtitle, description }) => (
  <div className="flex justify-center pv4 items-center item item-b flex justify-center pv4 items-center hover-white bg-animate hover-bg-green">
    <div className="w-80 tc">
      <p className="b ttu f6 sans-serif">{title}</p>
      <h1 className="helvetica b lh-leading mv0 pv3">{subtitle}</h1>
      <p className="caslon lh-solid f3 i">{description}</p>
    </div>
  </div>
);
