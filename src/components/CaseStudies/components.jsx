import React from "react";
import { Link } from "react-router-dom";
import CN from "classnames";

export const Title = ( { place, time, position, title, subtitle, description, line2 } ) => (
	<section className="flex pb2 bb flex-column-m mb3">
		<section className="flex flex-column justify-between helvetica lh-solid ph3 w-50 w-100-m br bn-m">
			<div className="pb2 fw6 helvetica f4">
				<p className="navy">{place}</p>
				<p className="silver">{time}</p>
				<p className="orange">{position}</p>
			</div>
			<div className="pv4 f-6 f-5-t f-5-m fw9 tracked-tight navy lh-title">
				{title}</div>
			<div className="fw6 f1 silver pb2-m bb-m f15-l f2-t f2-m tracked">
				{subtitle}</div>
		</section>
		<section className="lh-solid w-50 w-100-m pl3 pr3 pt2-m flex flex-column-reverse ">

			<div className="f2 minion fw5 f25-m navy">
				{line2}
			</div>
			<div className="pb2 f2 minion i fw5 f25-m orange">
				{description}</div>


		</section>
	</section>
);


export const ParImg = ( { oneimg } ) => (
	<div className="mv3">
		<img src={oneimg} alt="img"></img>
	</div>
);

export const Img = ( { oneimg } ) => (
	<div className="mw800 mauto ph3 ph0-m">
		<img src={oneimg} alt="img"></img>
	</div>
);
export const LImg = ( { oneimg, className } ) => (
	<div className={CN( "ma3 w-third fl fn-t fn-l fn-m", className )}>
		<img src={oneimg} alt="img"></img>
	</div>
);
export const TwoImg = ( { image1, image2, className, classNamee } ) => (
	<div className="flex-row flex justify-center overflow-hidden flex-column-m mb3">
		<img src={image1} alt="img" className={CN( "mr3 mr0-m", className )}></img>
		<img src={image2} alt="img" className={CN( classNamee )}></img>
	</div>
);

export const WImg = ( { oneimg, className } ) => (
	<section className="h9 ma3 overflow-scroll">
		<img src={oneimg} alt="img"></img>
	</section>
);

export const Br = () => ( <span>
	<br></br>
	<br></br>
</span> );

export const ProJ = ( { children } ) => (
	<section className="mv4 justify-center flex flex-column-m flex-column-t flex-column-l">
		{children}
	</section>
);

export const More = ( {
	title1,
	link1,
	bgImagei,
	className
} ) => (
		<section className="flex mh3 mt2-l mt2-m">
			<Link to={link1} className="link w5 w-100-l w-100-t w-100-m br3  ph2-m shadow-hover mb3-m mb3-l mb3-t">
				<div
					className={CN(
						"br3 bg-animate w5 w-100-l w-100-m w-100-t h5 cover bg-center",
						className
					)}
					style={{
						backgroundImage: `url(${bgImagei})`
					}}>
					<p className="f1 helvetica fw7 absolute bottom-1 right-1 pb2 pr3-m tracked">{title1}</p>

				</div>
			</Link>
		</section>
	);

export const Biblio = ( {
	link,
	name,
	author,
	year,
	publication,
	pages,
	className
} ) => (

		<a href={link} target="_blank" className="link" rel="noopener noreferrer">
			<div className={CN( "mb2", className )}>
				<div className="hover-orange">
					<p className="pt2 fw6 helvetica">{author}</p>
					<p className="i f27">{name}</p>
					<p>{publication}
						<span>{pages}</span>
						{year}</p>
				</div>
			</div>
		</a>
	);

export const Invision = ( { prototype } ) => (
	<section className="flex justify-center ma3">
		<iframe width="438" height="930" src={prototype} frameborder="0" allowfullscreen />
	</section>
);