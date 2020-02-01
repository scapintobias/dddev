import React from "react";
import { Link } from "react-router-dom";
import CN from "classnames";
import "./style.css";

export const Grid = ({ children }) => (
  <section className="mw68 center pb3">{children}</section>
);

export const Card = ({ link, title, subtitle, description, className }) => (
  <section className="pt3 ph3">
    <Link to={link}>
      <div className="bw5 bt b--navy shadow-hover">
        <div className="ba">
          <div className={CN("pa4 pa3-m", className)}>
            <div className="f1 f2-m fw7 tracked helvetica lh-solid pb4 pb3-m">
              {title}
            </div>
            <div className="f2 f3-m i  minion orange  pb3">{subtitle}</div>
            <div className="f2 f3-m tracked navy lh-solid minion">
              {description}
            </div>
            <div className="helvetica fw6 f3 tr pt4 pt3-m">Read more</div>
          </div>
        </div>
      </div>
    </Link>
  </section>
);
