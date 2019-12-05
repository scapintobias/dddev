import React from "react";
import "./style.css";

export const Grid = ({children}) => (
	<div className="fill-viewport mw8 min-vh-100 mw-100-m mw-100-l pr3 pl3 pl3-l pr3-l pl3-m pr3-m flex-m flex-l flex-wrap-l flex-column-m mauto pt3 mb6">
		{children}
	</div>
);
