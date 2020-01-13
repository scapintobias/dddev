import React from "react";
import {
	Link
} from "react-router-dom";
import CN from "classnames";
import "./style.css";

export const Grid = ( {
	children
} ) => (
		<section className="flex justify-center-m flex-wrap fill-viewport flex-column-m mb3 ml3 ml0-m">
			{children}
		</section>
	);

export const Card = ( {
	link,
	image,
	title,
	subtitle,
	description,
	className
} ) => (
		<Link to={link} className="mauto-m">
			<article className={CN( "bg-white br3 shadow-hover ba b--black-10 mh3 mv3 mw55", className )}>
				<img src={image} className="obj-cover db br3 br--top h5 center" alt="img" />
				<div className="pa3">
					<div className="f25 fw7 tracked helvetica pb2">{title}</div>
					<div className="f3 minion orange i pb3">{subtitle}</div>
					<div className="f4 lh-copy navy lh-leading minion">
						{description}
					</div>
					<div className="helvetica fw6 f4 tr mt3">Read more</div>
				</div>
			</article>
		</Link>
	);

export const CellText = ( {
	link,
	subtitle,
	description,
	text,
	className
} ) => (
		<Link to={link} className={CN( "flex justify-center", className )}>
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
