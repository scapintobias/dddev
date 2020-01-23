import React from "react";
import {
	Link
} from "react-router-dom";
import CN from "classnames";
import "./style.css";

export const Grid = ( {
	children
} ) => (
		<div className="pa3 flex flex-wrap flex-column-m flex-column-t">
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

		<section className="w-50 w-100-m w-100-t pa3 ">
			<Link to={link}>
				<div className='bw5 bt b--navy shadow-hover'>
					<div className='ba'>
						<div className={CN( "pa4 pa3-m", className )}>
							<div className="f1 f2-m fw7 tracked helvetica lh-solid pb4 pb3-m">{title}</div>
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

