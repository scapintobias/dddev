import React from 'react';
import { Link } from 'react-router-dom';
import TextLoop from 'react-text-loop';
const RandomCity = () => (
	<span>
		<br className="dn di-l di-t di-m"></br>
		<TextLoop interval={700}>
			<span>Belgium</span>
			<span>Australia</span>
			<span>UK</span>
			<span>USA</span>
			<span>Italy</span>
			<span>Scotland</span>
			<span>Canada</span>
			<span>Austria</span>
			<span>Bali</span>
			<span>Ireland</span>
			<span>Thailand</span>
			<span>Sweden</span>
			<span>Tahiti</span>
		</TextLoop>
	</span>
);

export const Homepage = (props) => (
	<main>
		<section className="pt2 pb5 pl3 pr3 pl2-m pr2-m mw-90 mw-100-m">
			<div className="helvetica navy lh-title tracked-tight f-7 f-45-m fw6">
				<span className="orange">Product</span> &{' '}
				<span className="orange">Interaction</span> Designer <span>based in</span>{' '}
				<RandomCity />
			</div>
			<p className="pt7 pt6-m minion navy f-6 f2-m lh-title-s">
				My name is{' '}
				<b className="helvetica tracked-tight f-5 f25-m tracked-tight-m orange">
					Tobias
				</b>
				. I design useful and enjoyable experiences with a love for deep user
				research, typography and elegant design. Please feel free to check out my{' '}
				<span className="helvetica fw7 tracked-tight f-5 f25-m tracked-tight-m link navy hover-orange">
					<Link to="/work">latest work</Link>
				</span>
				. Or if you wonder what I was designing some years back, there's an useful{' '}
				<span className="helvetica fw7 tracked-tight f-5 f25-m tracked-tight-m link navy hover-orange">
					<Link to="/archive">archive</Link>
				</span>
				.
			</p>
			<p className="pt2 pt2-m minion navy f-6 f2-m lh-title-s">
				Whether interested in my{' '}
				<b className="helvetica fw7 f-5 f25-m tracked-tight tracked-tight-m link navy hover-green">
					<Link to="/resources">resources</Link>
				</b>
				, or reading more{' '}
				<b className="helvetica fw7 f-5 f25-m tracked-tight tracked-tight-m link navy hover-silver">
					<Link to="/about">about&nbsp;&nbsp;me</Link>
				</b>
				, it's just a click away.
			</p>
		</section>
	</main>
);
