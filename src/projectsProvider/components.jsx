import React from "react";
import CN from "classnames";
export const Par = ( { className, children } ) => (

	<section className="flex justify-center flex-column-l flex-column-t flex-column-m mv3 mh3-m mh4-t mh5-l">
		<section className={CN( "w-50 w-100-m w-100-l w-100-t f27 f3-m minion lh-solid", className )} >
			{children}
		</section>
	</section>

);

export const Sec = ( { title } ) => (

	<div className="silver helvetica f1 fw7 tracked pt4 pb3 lh-title">{title}</div>

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

export const Img = ( { oneimg } ) => (
	<div className="ma3">
		<img src={oneimg} alt="img"></img>
	</div>
)

export const Iltr = ( { img, par, tit, par1, tit1, par2 } ) => (
	<section className="flex flex-column-m flex-column-t">
		<div className="w-50 w-100-m w-100-t pa3"><img src={img} alt="alt" /></div>
		<div className="flex flex-column w-50 w-100-t w-100-m">
			<p className="f4 ph3 pt3 minion silver lh-solid">{par}</p>
			<p className="f3 pa3 helvetica silver lh-solid">{tit}</p>
			<p className="f4 ph3 minion silver lh-solid">{par1}</p>
			<p className="f3 pa3 helvetica silver lh-solid">{tit1}</p>
			<p className="f4 ph3 pb3 minion silver lh-solid">{par2}</p>
		</div>

	</section>
);