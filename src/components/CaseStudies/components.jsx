import React from 'react';

export const Raster = ( { children } ) => (
	<div className="justify-center flex flex-column ml3-m pr3-m pb5 min-vh-100">
		<article className="sans-serif  dark-gray center">
			{children}
		</article>
	</div>
);

export const Date = ( { place, time } ) => (
	<section className="mw68 w-100-l helvetica mauto pb4 pb2-m pt3 pt2-m">
		<div className="fw6 f4">
			<p>{place}<br></br>
				<time className="ttu silver">{time}</time></p>
		</div>
	</section>
);

export const Title = ( { title, subtitle, description, line2 } ) => (
	<header className="mw68 w-100-m w-100-l   mb3 mr3-m mauto justify-center helvetica lh-solid bb bw4 b--dark-blue">
		<p className=" f-6 f-5-m fw7 tracked-tight dark-blue pb2-m pb6">{title}</p>
		<p className="fw6 f1 green pb3 pb2-m fw6-m f2-m tracked">{subtitle}</p>
		<p className="f2 minion fw5 fw6-m f25-m mb0 w-80 w-100-m light-red pb4 pb4-m lh-solid">{description}</p>
		<p className="f2 minion fw5 fw6-m f25-m mb0 w-80 w-100-m light-red pb4 pb2-m lh-solid">{line2}</p>
	</header>
);

export const Par = ( { txt } ) => (

	<section className="mw68 mauto">
		<p className="minion fw5 abc pr3">{txt}</p></section>
);

export const ParImg = ( { oneimg } ) => (

	<div className="mw68 mauto pt4 pb4">
		<img src={oneimg} alt="img"></img>
	</div>
);


export const SinImg = ( { oneimg } ) => (

	<div className="mw800 mauto pt4 pb4">
		<img src={oneimg} alt="img"></img>
	</div>
);
export const ThreeImg = ( { image1, image2, image3 } ) => (

	<div className="w-100 flex flex-row justify-center items-center-m items-center-l flex-column-l flex-column-m mauto pt4 pb4">
		<img src={image1} alt="img" className="pa2"></img>
		<img src={image2} alt="img" className="pa2"></img>
		<img src={image3} alt="img" className="pa2"></img>
	</div>
);


export const TwoImg = ( { image1, image2 } ) => (

	<div className="w-100 flex flex-row justify-center items-center-m flex-column-m mauto pt4 pb4">
		<img src={image1} alt="img" className="pa2"></img>
		<img src={image2} alt="img" className="pa2"></img>
	</div>
);