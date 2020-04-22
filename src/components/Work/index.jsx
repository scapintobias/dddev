import React from 'react';
import { Grid, Card } from './components.jsx';

export function Tab() {
	return (
		<main>
			<Grid>
				<div className="ph3 pt3 mh3 mt2 ba">
					<p className="navy helvetica f1 fw7 tracked pb4 lh-title">
						If you can't find it, design it.
					</p>
					<p className="minion f4 i tr orange pb2">Lella & Massimo Vignelli</p>
				</div>
				<Card
					link="./work/yape"
					title="Yape"
					subtitle="HRI UX Research"
					description="When I learned how to drive UGVs, researched into cognitive perception, and telerobotics."
					className="hover-light-blue link bg-animate navy"
				/>
				<Card
					link="./work/yapesrl"
					title="Yape"
					subtitle="A Design System"
					description="Where I pitched an idea to the CEO and went for the win, pleasing two companies and a Champion."
					className="hover-orange link bg-animate navy"
				/>
				<Card
					link="./work/enovia"
					title="e-Novia"
					subtitle="A sourceful experience"
					description="Where I learned to play as a team member, to pitch my idea to a CEO, and—vital—when to shut up."
					className="hover-green link bg-animate navy"
				/>
			</Grid>
		</main>
	);
}
