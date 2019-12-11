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
