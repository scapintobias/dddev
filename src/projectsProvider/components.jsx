import React from "react";
import CN from "classnames";
import "./style.css"
export const Par = ( { className, children } ) => (

	<section className="flex justify-center flex-column-l flex-column-t flex-column-m mv3 mh3-m mh4-t mh5-l">
		<section className={CN( "w-50 w-100-m w-100-l w-100-t f27 f3-m minion lh-solid", className )} >
			{children}
		</section>
	</section>

);

export const Sec = ( { title, subtitle } ) => (

	<div className="silver helvetica f1 fw7 tracked pt4 pb3 lh-title">{title}<br></br>{subtitle}</div>

);

export const Sub = ( { title } ) => (

	<div className="silver  helvetica f25 fw6  pt4 pb3 lh-title">{title}</div>

);

export const Quote = ( { quote } ) => (

	<div className="navy i minion i f27 lh-solid pl4 bl bw2">{quote}</div>

);

export const ParImg = ( { oneimg } ) => (
	<div className="mv3">
		<img src={oneimg} alt="img"></img>
	</div>
);

export const Img = ( { oneimg, className } ) => (
	<div className={CN( "pa3", className )}>
		<img src={oneimg} alt="img"></img>
	</div>
)

export const TwoImg = ( { image1, image2, className, classNamee } ) => (
	<div className="flex flex-column-m ma3">
		<img src={image1} alt="img" className={CN( "mr3 mr0-m", className )}></img>
		<img src={image2} alt="img" className={CN( classNamee )}></img>
	</div>
);

export const Iltr = ( { img, par, tit, par1, link, number, tit1, par2 } ) => (
	<section className="flex flex-column-m flex-column-t">
		<div className="w-50 w-100-m w-100-t pa3"><img src={img} alt="alt" /></div>
		<div className="flex flex-column w-40 w-100-t w-100-m position-relative">

			<p className="f4 ph3 pt3 minion silver lh-solid">{par}</p>
			<p className="f2 fw5 pa3 helvetica silver lh-solid">{tit}</p>
			<p className="f3 ph3 minion silver lh-solid">{par1}
				<a href={link} target="_blank"><sup>{number}</sup></a>
			</p>
			<p className="f2 fw5 pa3 helvetica silver lh-solid">{tit1}</p>
			<p className="f3 ph3 pb3 minion silver lh-solid">{par2}</p>
		</div>

	</section>
);

export const Br = () => (
	<br></br>
);