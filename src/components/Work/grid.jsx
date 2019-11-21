import React from "react";
import CN from "classnames";
import "../../tachyons.css";

export const Grid = ({ children }) => (
  <div className="mw8 mw-100-m mw-100-l pr3 pl3 pl3-l pr3-l pl3-m pr3-m flex-m flex-l flex-column-l flex-column-m mauto pt3">{children}</div>
);
