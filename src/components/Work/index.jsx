import React from "react";
import {Footer} from "../footer.jsx";
import {Grid} from "./grid.jsx";
import {Cell} from "./cell.jsx";
import {CellText} from "./cell.jsx";
import {CellF} from "./cell.jsx";

export function Tab() {
	return (
		<main>
			<Grid>
				<Cell
					link="/case-studies/weart"
					subtitle="Weart"
					description="AR Ring"
					text=""
					className="hover-gold bg-animate hover-bg-black-10 b--navy fl w-25 w-100-m w-100-l pv6 bl bt br-l br-m bb-l bb-m"
				/>

				<Cell
					link="/case-studies/yape"
					subtitle="Yape"
					description="Remote drone driving"
					className="hover-light-blue bg-animate hover-bg-black-10 bl br bt bt-n-m bt-n-l b--navy fl w-50 w-100-m w-100-l pv6"
				/>
				<Cell
					link="/case-studies/blimp"
					subtitle="Blimp"
					description="Ad data visualisation"
					className="hover-light-purple bg-animate hover-bg-black-10 bl-m bl-l br bt bb-l bb-m b--navy fl w-25 w-100-m w-100-l pv6"
				/>

				<CellText
					link="/case-studies/eNovia"
					subtitle="e-Novia"
					description="A sourceful experience"
					text="Where I learned how to drive drones, to pitch an idea to the CEO, and when to shut up."
					className="hover-green bg-animate hover-bg-black-10 br bb b--navy bt bt-n-l bt-n-m bl mb0-l mb0-m fl w-50 w-100-m w-100-l pv5 mb1"
				/>
				<CellText
					link="./case-studies/DisciplineDesign"
					subtitle="DisciplineDesign"
					description="A design story"
					text="A life journey. The personal brand I founded, and how this website came to be."
					className="hover-orange bg-animate hover-bg-black-10 bb bt bt-n-m bt-n-l bl-m br b--navy fl w-50 w-100-m w-100-l pv5 mb1 mb0-m mb0-l"
				/>
			</Grid>
		</main>
	);
}
