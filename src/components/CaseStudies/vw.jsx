import React from "react";
import {Link} from "react-router-dom";
import {
	Date,
	Raster,
	Title,
	Par,
	TwoImg,
	ParImg,
	Br,
	ProJ,
	More,
	Biblio
} from "./components.jsx";
import Vimeo from '@u-wave/react-vimeo';
import {Collapsible} from "./accordion.jsx";

export function Vw() {
	return (
		<main>
			<Raster>
				<Date place="Berlin" time="APR-19" position="Product Designer"/>
				<Title
					title="VW Das Auto"
					subtitle="iPad app to control your car"
					description="A UX case Study"
					line2="A new dashboard, enabling car owners to get information about their car, and help keeping track of maintanance."/>
				<Par>

				</Par>
				<ProJ>
					<More
						link1="./newsee"
						title1="Newsee"
						bgImagei="https://www.historic-newspapers.co.uk/app/uploads/2019/07/Original-newspapers-1.jpg"
						className="blue"/>
				<More
					link1="./yape"
					title1="Yape"
					bgImagei="https://www.gelestatic.it/thimg/rnqyJLk1rTkNQzYkLmh3aHHRtkY=/fit-in/960x540/https%3A//www.lastampa.it/image/contentid/policy%3A1.36532592%3A1561987740/347a8858-95fe-11e9-885d-a4a5552cec84_6_Yape_REV01-kkiH-U11203768442353oqE-1024x576%40LaStampa.it.jpg%3Ff%3Ddetail_558%26h%3D720%26w%3D1280%26%24p%24f%24h%24w%3Da139b42"
					className="gold"/>
					<More
						link1="./enovia"
						title1="e-Novia"
						bgImagei="https://e-novia.it/wp-content/themes/wp-bootstrap-starter-child/images/visit-us.jpg"
						className="green"/>
				</ProJ>
			</Raster>

		</main>
	);
}
