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
						link="./work/musicvenues"
						image="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80"
						title="Music Venues"
						subtitle="Product Design"
						description="A digital product that enables the final user to have a wider range of information when buying a ticket."
						className="hover-light-purple link bg-animate navy"
					/>

					<Card
						link="./work/yape"
						image="https://e-novia.it/wp-content/uploads/2018/11/6_Yape_REV01.jpg"
						title="Yape"
						subtitle="HRI UX Research"
						description="When I learned how to drive land drones, researched into cognitive perception, telerobotics and fastlaps."
						className="hover-light-blue link bg-animate navy"
					/>
					<Card
						link="./work/yapesrl"
						image="./img/ypae.png"
						title="Yape"
						subtitle="A Design System"
						description="Where I pitched an idea to the CEO and went for the win, pleasing two companies and a Champion."
						className="hover-orange link bg-animate navy"
					/>
					<Card
						link="./work/enovia"
						image="https://e-novia.it/wp-content/themes/wp-bootstrap-starter-child/images/visit-us.jpg"
						title="e-Novia"
						subtitle="A sourceful experience"
						description="Where I learned to play as a team member, to pitch my idea to a CEO, and—vital—when to shut up."
						className="hover-green link bg-animate navy"
					/>
					<Card
						link="./work/test"
						image="https://e-novia.it/wp-content/themes/wp-bootstrap-starter-child/images/visit-us.jpg"
						title="test"
						subtitle="A sourceful experience"
						description="Where I learned to play as a team member, to pitch my idea to a CEO, and—vital—when to shut up."
						className="hover-green link bg-animate navy"
					/>
				</Grid>
		</main>
	);
}
