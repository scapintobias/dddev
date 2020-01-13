import React from "react";
import { Link } from "react-router-dom";
import {

	Title,
	TwoImg,
	ParImg,
	Img,
	WImg,
	Br,
	ProJ,
	More,
	Biblio,
	Invision
} from "./components.jsx";
import { Par, Sec, Sub, Quote } from "./article.jsx";
import ImageZoom from 'react-medium-image-zoom'


export function Venues() {
	return (
		<main>
			<Title
				place="Milan"
				time="AUG-2019"
				position="Product Designer"
				title="Music Venues"
				subtitle="Exploring the music experience"
				description="A Product Design case Study"
				line2="A multi-touchpoint digital product that enables the final user to have a wider range of information when buying a venue ticket." />

			<Img oneimg="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80" className="pt4" />

			<Par>
				<Sec title="Overview" />
				This summer—oddly enough—I spent my time in Milan.<br /> The city offers many musical events, sometimes they last just one night, and sometimes an entire week. Everyone told me buying tickets online on <a href="https://www.ticketone.it/biglietti.html?affiliate=ITT&language=en" target="_blank" rel="noopener noreferrer" className="helvetica fw7 f3 hover-orange">TicketOne</a> in  2019 was indeed the best option...or so they thought.
				<Br />
				<span className="orange">What if there was a more immersive experience?</span>
				<Br />
				All of us are music app users, either Apple Music or Spotify, and both of these services give you suggestions about the music you could like, based on what you're listening. I wondered if this could apply to concerts too—yes there are the usual headliners, but <span className="orange">what if</span> the local band plays a genre close to your likings, and is performing tomorrow just two blocks away?<br></br> And <span className="orange">what if</span> you can directly listen to their newest release directly from the ticket page? Marvelous.



				<Sec title="Process" />
				I only had <span className="orange">seven days</span> to conduct user interviews, build an affinity map to synthesise the results, do early sketches, build a functioning lo-fi prototype to have the first usability tests conducted on, and other <span className="orange">ten days</span> to build a design system, a hi-fi prototype and do the final touches.
				<Br />
				The tools I used were pen and paper for the early sketches, InVision for the lo-fi prototype, Sketch for the design system, and React.JS for the hi-fi prototype.
				<ParImg oneimg="https://images.unsplash.com/photo-1561123760-0b8467594a63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3264&q=80" />

				<Sec title="User Interviews" />
				I dedicated two full days preparing for the interviews and conducting research, trying to craft coherent questions that would help me learn the actual experience of what people go through to buy a ticket, what could be enhanced, and what could be designed from the ground up because it doesn't exist on the market yet.
				<Sub title="Questions to the users" />
				<ul className="list">
					<li>1.</li>
					<li>2.</li>
					<li>3.</li>
					<li>4.</li>
					<li>5.</li>
					<li>6.</li>
				</ul>
				<Sec title="Affinity Mapping" />
				<Quote quote="I just feel like" />


				<Sec title="Problem Statement and Solution" />


				<Sub title="The Problem" />

				<Sub title="The Design Solution" />

				<Sec title="Usability Tests" />

				<Sub title="Iterations" />
				<Sub title="Results" />


			</Par>
			<Invision prototype="//invis.io/KFVIU5AXVJM" />
			

		</main>
	);
}
