import React from "react";
import { Link } from "react-router-dom";
import {

	Title,
	TwoImg,
	ParImg,
	Img,
	Br,
	ProJ,
	More,
	Biblio
} from "./components.jsx";
import Vimeo from '@u-wave/react-vimeo';
import { Collapsible } from "./accordion.jsx";
import { Par } from "./article.jsx";
export function newsee() {
	return (
		<main>
			<Title
				place="Berlin"
				time="AUG-2019"
				position="Product Designer"
				title="Newsee"
				subtitle="Headlines streamlined"
				description="A UX case Study"
				line2="An Android app that gathers the most important headline news of the day in the most simplistic way." />
			<Par subtitle="Here's a thought" classname="orange i minion">
				Spending a vast amount of time riding the tube around the city, resulted in many hours spent in front of the screen, a lot of power-banks, and a huge amount of news divoured. I have a soft spot for current events, and I couldn't eat more. Hence—professional deformation—I started to notice all the issues, and figured I wasn't the only one. So, the process started again.
				</Par>
			<Par subtitle="Challenge">
				The world and our country are going through some crazy times and that's a fact I indeed cannot control, but I think I should be able to control my own news reading experience.
				</Par>
			<Par subtitle="Goal">
				Design an app with a minimalistic interface, in which I can carefully choose the topics (maybe when I wake up I don't want to be buried by shootings headlines) and the amount of data&battery it consumes, avoiding images and whatnot.

				</Par>
			<Img oneimg="/img/newsee_1.png" />
			<ProJ>
				<More
					link1="./vw"
					title1=""
					bgImagei="https://cdn.motor1.com/images/mgl/2RQQg/s4/volkswagen-new-logo.jpg"
					className="blue" />
				<More
					link1="./yape"
					title1="Yape"
					bgImagei="https://www.gelestatic.it/thimg/rnqyJLk1rTkNQzYkLmh3aHHRtkY=/fit-in/960x540/https%3A//www.lastampa.it/image/contentid/policy%3A1.36532592%3A1561987740/347a8858-95fe-11e9-885d-a4a5552cec84_6_Yape_REV01-kkiH-U11203768442353oqE-1024x576%40LaStampa.it.jpg%3Ff%3Ddetail_558%26h%3D720%26w%3D1280%26%24p%24f%24h%24w%3Da139b42"
					className="gold" />
				<More
					link1="./enovia"
					title1="e-Novia"
					bgImagei="https://e-novia.it/wp-content/themes/wp-bootstrap-starter-child/images/visit-us.jpg"
					className="green" />
			</ProJ>


		</main>
	);
}
