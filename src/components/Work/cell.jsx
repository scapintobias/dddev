import React from "react";
import {Link} from "react-router-dom";
import CN from "classnames";

export const Cell = ({link, subtitle, description, className}) => (
	<Link to={link} className={CN("flex justify-center navy", className)}>
		<div className="w-90 tc">
			<h1 className="helvetica tracked f2 b lh-leading pb3">{subtitle}</h1>
			<p className="pb1 pt5 f3 i minion">{description}</p>
		</div>
	</Link>
);

export const CellText = ({link, subtitle, description, text, className}) => (
	<Link to={link} className={CN("flex justify-center navy", className)}>
		<div className="w-90 tc">
			<h1 className="helvetica tracked f2 b lh-leading pb3">{subtitle}</h1>
			<p className="pt3 f3 i minion">{description}</p>
			<p className="minion pt5 w-90 w-70-l center lh-solid f2 f3-m">{text}</p>
		</div>
	</Link>
);
export const CellLines = ({
	link,
	subtitle,
	description,
	text,
	line,
	className
}) => (
	<Link to={link}>
		<div className={CN("flex justify-center navy", className)}>
			<div className="w-90 tc">
				<h1 className="helvetica tracked f2 b lh-leading pb3">{subtitle}</h1>
				<p className="pt3 f3 i minion">{description}</p>
				<p className="minion pt5 w-90 w-70-l center lh-solid f2 f3-m">{text}</p>
				<p className="minion w-90 w-70-l center lh-solid f2 f3-m">{line}</p>
			</div>
		</div>
	</Link>
);

export const BBr = () => (
	<span>
		<br></br>
	</span>
);
