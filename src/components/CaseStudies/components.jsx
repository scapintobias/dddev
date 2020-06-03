import React from 'react';
import { Link } from 'react-router-dom';
import CN from 'classnames';

export const Title = ({
	place,
	time,
	position,
	title,
	subtitle,
	description,
	line2,
}) => (
	<section className="flex pb2 bb flex-column-m">
		<section className="flex flex-column justify-between helvetica lh-copy ph3 w-50 w-100-m br bn-m">
			<div className="pb2 fw6 helvetica f4">
				<p className="navy">{place}</p>
				<p className="silver">{time}</p>
				<p className="orange">{position}</p>
			</div>
			<div className="pv4 f-6 f-5-t f-5-m fw9 tracked-tight navy lh-title">
				{title}
			</div>
			<div className="fw6 f1 silver pb2-m bb-m f15-l f2-t f2-m tracked">
				{subtitle}
			</div>
		</section>
		<section className="lh-copy w-50 w-100-m pl3 pr3 pt2-m flex flex-column-reverse ">
			<div className="f2 minion fw5 f25-m navy">{line2}</div>
			<div className="pb2 f2 minion i fw5 f25-m orange">{description}</div>
		</section>
	</section>
);

export const ParImg = ({ oneimg }) => (
	<div className="mt4 mb2">
		<img src={oneimg} alt="img"></img>
	</div>
);

export const Img = ({ oneimg, className }) => (
	<div className={CN('ph3 pt3 center', className)}>
		<img src={oneimg} alt="img"></img>
	</div>
);
export const LImg = ({ oneimg, className }) => (
	<div className={CN('ma3 w-third fl fn-t fn-l fn-m', className)}>
		<img src={oneimg} alt="img"></img>
	</div>
);
export const TwoImg = ({ image1, image2, className, classNamee }) => (
	<div className="flex-row flex justify-center overflow-hidden flex-column-m mb3">
		<img src={image1} alt="img" className={CN('mr3 mr0-m', className)}></img>
		<img src={image2} alt="img" className={CN(classNamee)}></img>
	</div>
);

export const WImg = ({ oneimg, className }) => (
	<section className="h9 ma3 overflow-scroll">
		<img src={oneimg} alt="img"></img>
	</section>
);

export const Br = () => (
	<span>
		<br></br>
		<br></br>
	</span>
);

export const ProJ = ({ children }) => (
	<section className="mv4 justify-center flex flex-wrap">{children}</section>
);

export const More = ({ link, title, subtitle }) => (
	<section className="flex mh2 mt2-l mt2-m">
		<Link to={link}>
			<div className="ba">
				<div className="bw5 bt b--navy shadow-hover h5 w5 flex flex-column">
					<div className="f1 f2-m fw7 tracked helvetica lh-solid ph2 pv1">
						{title}
					</div>
					<div className="orange minion f2 f3-m ph2 i lh-title">{subtitle}</div>
					<div className="helvetica fw6 f3 pb2 ph2 absolute bottom-0 right-0">
						Read more
					</div>
				</div>
			</div>
		</Link>
	</section>
);

export const Biblio = ({
	link,
	name,
	author,
	year,
	publication,
	pages,
	className,
}) => (
	<a href={link} target="_blank" className="link" rel="noopener noreferrer">
		<div className={CN(className)}>
			<div className="hover-orange pb2">
				<p className="pt2 fw6 helvetica">{author}</p>
				<p className="i f27">{name}</p>
				<p>
					{publication}
					<span>{pages}</span>
					{year}
				</p>
			</div>
		</div>
	</a>
);

export const Invision = ({ prototype }) => (
	<div className="tso-m">
		<iframe
			title="myframe"
			width="438"
			height="930"
			src={prototype}
			frameBorder="0"
			allowFullScreen
		/>
	</div>
);

export const Head = ({ head }) => (
	<p className="f4 ph3 pt3 minion silver lh-solid">{head}</p>
);
export const Tit = ({ tit }) => (
	<p className="f2 fw5 pa3 helvetica silver lh-solid">{tit}</p>
);
export const P = ({ children }) => (
	<p className="f3 ph3 pb3 minion silver lh-solid">{children}</p>
);
export const Rf = ({ link, rf }) => (
	<a
		href={link}
		target="_blank"
		rel="noopener noreferrer"
		className="link hover-orange"
	>
		<sup>{rf}</sup>
	</a>
);

export const Iltr = ({ img, children }) => (
	<section className="flex justify-around items-start flex-column-m flex-column-t">
		<div className="w-40 w-100-m w-100-t pa3 sticky-top">
			<img src={img} alt="alt" />
		</div>
		<div className="sticky w-40 w-100-t w-100-m">
			<div>{children}</div>
		</div>
	</section>
);

export const Audio = ({ source }) => (
	<audio controls preload="auto" className="mv4 w-100 flex items-center">
		<source src={source} />
	</audio>
);
