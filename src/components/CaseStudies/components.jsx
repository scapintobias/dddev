import React from 'react';

export const Raster = ( { children } ) => (
	<div className="justify-center flex flex-column w-100-m w-90-l ml3-m pr3-m pb5 min-vh-100">
		<article className="sans-serif  dark-gray center">
			{children}
		</article>
	</div>
);

export const Date = ( { place, time } ) => (
	<section className="mw68 helvetica mauto pb4 pb2-m pt3 pt2-m">
		<div className="fw6 f5 lh-solid">
			<p>{place}</p>
			<time className="ttu silver">{time}</time>
		</div>
	</section>
);

export const Title = ( { title, subtitle, description, line2 } ) => (
	<header className="mw68 helvetica lh-solid bb bw4 mauto justify-center b--dark-blue mb5 mr3-m">
		<p className=" f-6 f-5-m fw7 tracked-tight dark-blue pb2-m pb6">{title}</p>
		<p className="fw6 f1 green pb3 pb2-m fw6-m f2-m tracked">{subtitle}</p>
		<p className="f2 minion fw5 fw6-m f25-m mb0 w-70 w-100-m light-red pb4 pb4-m lh-solid">{description}</p>
		<p className="f2 minion fw5 fw6-m f25-m mb0 w-70 w-100-m light-red pb2 pb2-m lh-solid">{line2}</p>
	</header>
);

export const Par = ( { txt } ) => (

	<section className="mw68 mauto w-100-m w-90-l">
		<p className="minion fw5 abc pr3">{txt}</p></section>
);

export const ParImg = ( { oneimg } ) => (

	<div className="mw68 w-100-m w-90-l mauto pt4 pb4 pr3-m">
		<img src={oneimg} alt="img"></img>
	</div>
);


export const SinImg = ( { oneimg } ) => (

	<div className="mw800 w-100-m w-90-l mauto pt4 pb4 pr3-m">
		<img src={oneimg} alt="img"></img>
	</div>
);
export const ThreeImg = ( { image1, image2, image3 } ) => (

	<div className="w-90 w-100-m w-90-l flex flex-row justify-center items-center-m flex-column-m mauto pt4 pb4 pr3-m">
		<img src={image1} alt="img" className="pa2"></img>
		<img src={image2} alt="img" className="pa2"></img>
		<img src={image3} alt="img" className="pa2"></img>
	</div>
);


export const TwoImg = ( { image1, image2 } ) => (

	<div className="w-90 w-100-m w-90-l flex flex-row justify-center items-center-m flex-column-m mauto pt4 pb4 pr3-m">
		<img src={image1} alt="img" className="pa2"></img>
		<img src={image2} alt="img" className="pa2"></img>
	</div>
);