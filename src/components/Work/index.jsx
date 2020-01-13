import React from "react";
import {
	Grid,
	Card,
} from "./components.jsx";


export function Tab() {
	return (
		<main>
			<div className="silver helvetica f1 fw7 tracked mt2 pt1 pb3 pl4 pl3-m lh-title">Case Studies</div>
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
					subtitle="UX Research"
					description="When I learned how to drive land drones, researched into cognitive perception, telerobotics and fastlaps"
					className="hover-light-blue link bg-animate navy"
				/>


			</Grid>
			<div className="silver helvetica f1 fw7 tracked mt4 pt3 bt pb3 pl4 pl3-m lh-title">Articles</div>
			<Grid>
				<Card
					link="./work/enovia"
					image="https://e-novia.it/wp-content/themes/wp-bootstrap-starter-child/images/visit-us.jpg"
					title="e-Novia"
					subtitle="A sourceful experience"
					description="Where I learned to play as a team member, to pitch my idea to a CEO, and—vital—when to shut up."
					className="hover-green link bg-animate navy"
				/>
			</Grid>
		</main>
	);
}
