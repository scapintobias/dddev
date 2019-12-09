		import React from "react";
		import {
			Link
		} from "react-router-dom";
		import CN from "classnames";
		import "./style.css";

		export const Grid = ( {
			children
		} ) => (
			<div className="fill-viewport mw68 mw-100-m mw-100-l pr3 pl3 pl3-l pr3-l pl3-m pr3-m flex-m flex-l flex-wrap-l flex-column-m mauto mt4 mt3-l mt3-m mb3">
		{children}
	</div>
		);

		export const Cell = ( {
			link,
			subtitle,
			description,
			className
		} ) => (
			<Link to={link} className={CN("flex justify-center", className)}>
		<div className="w-90 tc">
			<h1 className="helvetica tracked f2 b lh-leading pb3">{subtitle}</h1>
			<p className="pb1 pt5 f3 i minion">{description}</p>
		</div>
	</Link>
		);

		export const CellText = ( {
			link,
			subtitle,
			description,
			text,
			className
		} ) => (
			<Link to={link} className={CN("flex justify-center", className)}>
		<div className="w-90 tc">
			<h1 className="helvetica tracked f2 b lh-leading pb3">{subtitle}</h1>
			<p className="pt3 f3 i minion">{description}</p>
			<p className="minion pt5 pt3-m w-90 w-80-m center lh-solid f2 f3-m">{text}</p>
		</div>
	</Link>
		);

		export const BBr = () => (
			<span>
		<br></br>
	</span>
		);
