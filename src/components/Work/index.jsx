		import React from "react";
		import {
			Footer
		} from "../footer.jsx";
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
					text="Where I learned how to drive drones, to pitch an idea to a CEO, and when to shut up."
					className="hover-green bg-animate hover-bg-black-10 b--navy ba l mb0-l mb0-m fl w-60 w-100-m w-100-l pv65 pv6-l pt2-l pb2-l pv2-m brl-n-m"/>
				<Cell
					link="/case-studies/yape"
					subtitle="Yape"
					description="Remote drone driving"
					text=""
					className="hover-light-blue bg-animate hover-bg-black-10 b--navy fl w-40 w-100-m w-third-l pv45 pv3-l pv2-m br bt bt-n-l bt-n-m br-n-m bl-l br-l bb-l bb-m "/>

				<Cell
					link="/case-studies/weart"
					subtitle="Weart"
					description="AR Ring"
					className="navy hover-gold bg-animate hover-bg-black-10  br br-n-l br-n-m bt bt-n-m bt-n-l bb-l  b--navy fl w-40 w-third-l pv3-l pv45 pv2-m w-100-m"/>
				<Cell
					link="/case-studies/blimp"
					subtitle="Blimp"
					description="Ad data visualisation"
					className="hover-light-purple bg-animate hover-bg-black-10 bt-n-l br br-n-m bt bl-l bb b--navy fl w-40 w-third-l w-100-m pv45 pv3-l pv2-m"/>

			</Grid>
		</main>
			);
		}
