import React from "react";
import { Link } from "react-router-dom";
import "../../tachyons.css";
import "../../type.css";
import "./style.css";
import CN from "classnames";

export const Raster = ({ children }) => (
  <div className="pa4 pa1-m">
    <article className="sans-serif dark-gray ph3 ph0-ns mv5 center grid layout measure-wide-m mw8-l">
      {children}
    </article>
  </div>
);

export const Date = ({ place, time }) => (
  <section className="layout--meta helvetica flex flex-column pt3 pb5-m">
    <div className="fw6 f5 lh-solid  mb0-ns">
      <p>{place}</p>
      <time className="ttu silver">{time}</time>
    </div>
  </section>
);

export const Title = ({ title, subtitle, description }) => (
  <header className="layout--title helvetica lh-solid bb bw4 b--dark-blue pb3 mb0-m mb4 mr0-m flex flex-column space-between">
    <p className=" f-6 f-5-m  fw7 tracked-tight dark-blue pb5-m pb6">{title}</p>
    <p className="fw6 f1 green pb6 pb5-m fw5-m f3-m tracked">{subtitle}</p>
    <p className="f3 fw5 f4-m mb0 w-70 light-red pb4 lh-solid">{description}</p>
  </header>
);
