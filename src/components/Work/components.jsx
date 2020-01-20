import React from "react";
import {
	Link
} from "react-router-dom";
import CN from "classnames";
import "./style.css";

export const Grid = ( {
	children
} ) => (
		<div className="fill-viewport">
			{children}
		</div>
	);

export const Card = ( {
	link,
	image,
	title,
	subtitle,
	description,
	className
} ) => (
		<Link to={link}>
			<article className={CN( "bg-white mw68  db center  ba br2 b--light-gray ma3 ma4-t ma4-m", className )}>
				<img src={image} className="obj-cover db h6 h5-m center br1" alt="img" />
				<div className="pa4 pa3-m">
					<div className="f1 f2-m fw7 tracked helvetica lh-solid pb4 pb3-m">{title}</div>
					<div className="f2 f3-m minion orange i pb3">{subtitle}</div>
					<div className="f2 f3-m mw6 navy lh-solid minion">
						{description}
					</div>
					<div className="helvetica fw6 f3 tr pt3">Read more</div>
				</div>
			</article>
		</Link>
	);

