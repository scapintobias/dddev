		import React from "react";
		import {
			Grid,
			Card,
		} from "./components.jsx";

		export function Tab() {
			return (
				<main>
					<Grid>
						<Card
							link="./case-studies/newsee"
							image="https://www.historic-newspapers.co.uk/app/uploads/2019/07/Original-newspapers-1.jpg"
							title="Newsee"
							subtitle="Case study"
							description="An Android app that gathers the most important headline news of the day in the most simplistic way."
							className="hover-blue bg-animate navy"
							/>
						<Card
							link="./case-studies/vw"
							image="https://cdn.motor1.com/images/mgl/2RQQg/s4/volkswagen-new-logo.jpg"
							title="VW Das Auto"
							subtitle="Case study"
							description="A new dashboard, enabling car owners to get information about their car, and help keeping track of maintanance."
							className="hover-light-silver bg-animate navy"
							/>
						<Card
							link="./case-studies/yape"
							image="https://e-novia.it/wp-content/uploads/2018/11/6_Yape_REV01.jpg"
							title="Yape"
							subtitle="Case study"
							description="When I learned how to drive land drones, researched into cognitive perception, telerobotics and fastlaps"
							className="hover-light-blue bg-animate navy"
							/>
					<Card
						link="./case-studies/enovia"
						image="https://e-novia.it/wp-content/themes/wp-bootstrap-starter-child/images/visit-us.jpg"
						title="e-Novia"
						subtitle="A sourceful experience"
						description="Where I learned to play as a team member, to pitch my idea to a CEO, and—vital—when to shut up."
						className="hover-green bg-animate navy"
						/>

					</Grid>
		</main>
			);
		}
