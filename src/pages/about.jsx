import React from "react";
import { Link } from "react-router-dom";
import {
	Br,
	ParImg
} from '../components/CaseStudies/components.jsx';
import { Par } from "../components/CaseStudies/article.jsx";
// import {Audio} from '../components/Audio/audioplayer.jsx';
export function About() {
	return <main>



		<Par className="mb4">
			<ParImg oneimg="https://scontent-mxp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/24177547_2121312854755632_1242094414470316032_n.jpg?_nc_ht=scontent-mxp1-1.cdninstagram.com&_nc_cat=100&oh=36c2a808a0af19cfce972c0d60613f16&oe=5E75C661" className="mb3" />
			I was born in the Venice’ countryside, in a family of carpenters, architects and designers. And that
			has been a strong starting point.
				<Br />
			When I was sophomore in high school, I met Maurizio and Armando Milani, fellow designers of Massimo Vignelli, who had at hand a rebrand to do, for the cultural centre not far from the art school I was attending, so they set up a workshop, with the purpose for the students to deliver the corporate image.
				<Br />
			I think that's actually when I found out about my love for design systems.
				<Br />
			When choosing which
			university course to undertake, I considered many, but all in all, what I wanted was something as
			strong as engineering, deep as architecture, and detailed as a medium-format photograph. The match
			was Communication Design at the Milan Polytechnic, which embodies each and every aspect of my idea
			of design: disciplined, fast paced, and with very strong foundations. This long-lasting learning
			journey, helped me understand what exactly I can deem to be keen on, in the infinite fields of
			design.
				<Br />
			Since the first steps—and of course it still hasn’t changed—I felt soundly bound to
			typography; it started I guess when I was asked to draw freehand the whole Bodoni and Neue Haas
			Grotesk alphabets, back in 2007, and that set off the basic instinct to become really accurate in
				seizing the right font, kerning and typographical grid for each and every task. <Br />
			I spent my teen years definetly not in a soccer field like most of my peers, but in front of a computer, learning the magic of code. I was getting aware of the digital world growing around me, and I started to translate all the layout rules drawn for printing, into digital objects.
				<Br />
			At this stage, I had a vast experience as a freelancer, spanning almost 8 years, so, after
			getting my bachelor in 2016, I took a year off working on projects more towards interaction design and for filling the gaps in my knowledge in order not to make a fool of myself if I wanted to enter the master of science in user experience and interaction design at my university (that still fell under the umbrella name of 'communication design' at the time). And so I enrolled,
			in february 2017, starting a whole new chapter. I gained my degree in april 2019 with a thesis on
			'User Experience design for land-drones remote driving', theme arose from my work experience during
			this time, which you can find writings about in the
				<Link className="helvetica fw7 f3 link hover-green" to="/case-studies/eNovia">{" "}
				e-Novia{" "}
			</Link>
			file.
		</Par>


	</main>
}
