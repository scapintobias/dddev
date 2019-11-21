import React from "react";
import {Link} from "react-router-dom";
import "../../tachyons.css";
import "../../type.css";

export const Homepage = props => (
	<main>
		<section className="pt2 pl3 pr3 pl2-m pr1-m">
			<p className="helvetica lh-title tracked-tight f-7 f-45-m fw6">
				<span className="orange">Product</span> &{" "}
				<span className="orange">Interaction</span> Designer based in Italy
			</p>
			<p className="pt7 pt6-m caslon f-6 f2-m lh-title-s">
				My name is{" "}
				<b className="helvetica tracked-tight tracked-tight-m orange">
					Tobias
				</b>
				. I design useful and enjoyable experiences with a love for
				research, powerful typography and elegant design. Please feel free
				to check out my{" "}
				<span className="helvetica fw7 tracked-tight tracked-tight-m link black hover-orange">
					<Link to="/work">case studies</Link>
				</span>{" "}
				or my{" "}
				<b className="helvetica fw7 tracked-tight tracked-tight-m link black hover-light-blue">
					<Link to="/projects">archive</Link>
				</b>
				. Whether interested in reading more{" "}
				<b className="helvetica fw7 tracked-tight tracked-tight-m link black hover-dark-blue">
					<a href="/about">about me</a>
				</b>
				, sit back: it could get quite long.
			</p>
		</section>
	</main>
);
