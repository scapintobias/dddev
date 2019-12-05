import React from "react";
import {Footer} from "../footer.jsx";
import {Grid} from "./grid.jsx";
import {Cell, CellText, CellLines, BBr} from "./cell.jsx";

export function Tab() {
	return (
		<main>
			<Grid>
				<CellText
					link="/case-studies/eNovia"
					subtitle="e-Novia"
					description="A sourceful experience"
					text="Where I learned how to drive drones, to pitch an idea to a CEO, and when to shut up."
					className="hover-green bg-animate hover-bg-black-10 b--navy ba l mb0-l mb0-m fl w-60 w-100-m w-100-l pv65 pv3-l pv2-m"
				/>
				<Cell
					link="/case-studies/yape"
					subtitle="Yape"
					description="Remote drone driving"
					text=""
					className="hover-light-blue bg-animate hover-bg-black-10 b--navy fl w-40 w-100-m w-third-l pv45 pv3-l pv2-m br bt bt-n-l bt-n-m bl-m bl-l br-l br-m bb-l bb-m"
				/>

				<Cell
					link="/case-studies/weart"
					subtitle="Weart"
					description="AR Ring"
					className="hover-gold bg-animate hover-bg-black-10  bl-m br br-n-l bt bt-n-m bt-n-l bb-l  b--navy fl w-40 w-third-l pv3-l pv45 pv2-m w-100-m"
				/>
				<Cell
					link="/case-studies/blimp"
					subtitle="Blimp"
					description="Ad data visualisation"
					className="hover-light-purple bg-animate hover-bg-black-10 bl-m bt-n-l br bt bl-l bb b--navy fl w-40 w-third-l w-100-m pv45 pv3-l pv2-m"
				/>

				<CellText
					link="./case-studies/DisciplineDesign"
					subtitle="DisciplineDesign"
					description="A design story"
					text="A life journey. The personal brand I founded, and how this website came into exhistence."
					className="hover-orange bg-animate hover-bg-black-10 bb bl br b--navy fl w-100 pv2 mb4 mb2-m mb2-l"
				/>
			</Grid>
		</main>
	);
}
