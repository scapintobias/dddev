		import React from "react";
		import {
			Cell,
			CellText,
			Grid,
		} from "./components.jsx";

		export function Tab() {
			return (
				<main>
<Grid>

						<CellText
							link="/case-studies/eNovia"
							subtitle="e-Novia"
							description="A sourceful experience"
							text="Where I learned how to drive drones, to pitch an idea to a CEO, and–vital–when to shut up."
							className="hover-green bg-animate hover-bg-black-10 b--navy bt bl bb fl w-50 w-100-m pv4 pv1-m brl-n-m mb3"/>
						<CellText
							link="/case-studies/yape"
							subtitle="Yape"
							description="Case study"
							text="When I researched into human cognitive perception, telerobotics and fastlaps."
							className="hover-light-blue bg-animate hover-bg-black-10 b--navy fl w-50 w-100-m pv4 pv1-m br bb bt bt-n-m brl-n-m bl br-l bb-l bb-m mb3"/>

			</Grid>
		</main>
			);
		}
