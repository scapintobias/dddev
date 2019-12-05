import React from "react";
import {Link} from "react-router-dom";
import CN from "classnames";

export const Raster = ({children}) => (
	<div className="justify-center flex flex-column ml3-l pr3-l ml3-m pr3-m pb5 min-vh-100">
		<article className="sans-serif  dark-gray center">{children}</article>
	</div>
);

export const Date = ({place, time}) => (
	<section className="mw68 w-100-l helvetica mauto pb4 pb2-m pt3 pt2-m">
		<div className="fw6 f4 navy">
			<p>
				{place}
				<br></br>
				<time className="silver">{time}</time>
			</p>
		</div>
	</section>
);

export const Title = ({title, subtitle, description, line2}) => (
	<header className="mw68 w-100-m w-100-l   mb3 mr3-m mauto justify-center helvetica lh-solid bb bw4 b--silver">
		<p className=" f-6 f-5-m fw7 tracked-tight navy pb2-m pb6">{title}</p>
		<p className="fw6 f1 silver pb3 pb2-m fw6-m f2-m tracked">{subtitle}</p>
		<p className="f2 minion fw5 fw6-m f25-m mb0 w-80 w-100-m navy pb4 pb4-m lh-solid">
			{description}
		</p>
		<p className="f2 minion fw5 fw6-m f25-m mb0 w-80 w-100-m navy pb4 pb2-m lh-solid">
			{line2}
		</p>
	</header>
);
export const HelTit = ({line1, line2, line3}) => (
	<section className="mw68 w-100-m w-100-l mauto">
		<div className="helvetica navy f1-m fw6-m fw6-l f-5-l f-5 pt2 fw6 tracked lh-title">
			<p>{line1}</p>
			<p className="pt4">{line2}</p>
			<p className="pt5 f3 fw5 silver">{line3}</p>
		</div>
	</section>
);
export const Par = ({children}) => (
	<section className="mw68 mauto navy">
		<p className="minion fw5 abc pr3 mb3">{children}</p>
	</section>
);

export const ParImg = ({oneimg}) => (
	<div className="mw68 mauto pb3">
		<img src={oneimg} alt="img"></img>
	</div>
);

export const SinImg = ({oneimg}) => (
	<div className="mw800 mauto pl3 pl0-m pr0-m pr3 pt4 pb4">
		<img src={oneimg} alt="img"></img>
	</div>
);
export const ThreeImg = ({image1, image2, image3}) => (
	<div className="w-100 flex flex-row justify-center items-center-m items-center-l flex-column-l flex-column-m mauto pt4 pb4">
		<img src={image1} alt="img" className="pa2"></img>
		<img src={image2} alt="img" className="pa2"></img>
		<img src={image3} alt="img" className="pa2"></img>
	</div>
);

export const TwoImg = ({image1, image2}) => (
	<div className="w-100 flex flex-row justify-center items-center-m flex-column-m mauto pt4 pb4">
		<img src={image1} alt="img" className="pa2"></img>
		<img src={image2} alt="img" className="pa2"></img>
	</div>
);

export const Br = () => (
	<span>
		<br></br>
		<br></br>
	</span>
);

export const More = ({
	title1,
	title2,
	title3,
	link1,
	link2,
	link3,
	bgImagei,
	bgImageii,
	bgImageiii,
	className,
	classNamee,
	classNameee
}) => (
	<section>
		<div className="flex mt5 flex-column-m flex-column-l justify-center">
			<Link to={link1}>
				<div
					className={CN(
						"helvetica mb2-m mb2-l fw7 tracked ph3-m f1 bg-animate b--navy ba w5 w-100-l h5 pt3 cover bg-center",
						className
					)}
					style={{backgroundImage: `url(${bgImagei})`}}
				>
					{title1}
				</div>
			</Link>
			<Link to={link2}>
				<div
					className={CN(
						"helvetica mr2 ml2 mr0-m ml0-m mr0-l ml0-l mb2-m mb2-l tracked ph3-m fw7 f1 bg-animate hover-bg-black-10 b--navy ba w5 w-100-l h5 pt3 cover bg-center",
						classNamee
					)}
					style={{backgroundImage: `url(${bgImageii})`}}
				>
					{title2}
				</div>
			</Link>
			<Link to={link3}>
				<div
					className={CN(
						"helvetica mb2-m fw7 tracked ph3-m f1 bg-animate b--navy ba w5 w-100-l h5 pt3 cover bg-center",
						classNameee
					)}
					style={{backgroundImage: `url(${bgImageiii})`}}
				>
					{title3}
				</div>
			</Link>
		</div>
	</section>
);
