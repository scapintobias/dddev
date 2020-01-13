import React from "react";
import {
	Link
} from "react-router-dom";
import {
	Title,
	TwoImg,
	ParImg,
	Img,
	Br,
	ProJ,
	More,
	Biblio
} from "./components.jsx";
import Vimeo from '@u-wave/react-vimeo';
import {
	Collapsible
} from "./accordion.jsx";
import {
	Par,
	Sec
} from "./article.jsx";

export function Yape() {
	return (
		<main>

			<Title
				place="e-Novia S.P.A."
				time="JUN—NOV—2018"
				position="Product Designer Intern"
				title="Yape"
				subtitle="Unmanned Ground Vehicle"
				description="Case Study on teleoperation user experience"
				line2="In 2018 Yape transformed into a remotely-driven drone. This is the story of how I made a positive difference in the process." />

			<Img oneimg="https://e-novia.it/wp-content/uploads/2018/11/6_Yape_REV01.jpg" />
			<p className="mr3 mb2 ml3  minion gray tr tl-t tl-m f7">To comply with my confidentiality agreement I have omitted and appropriated confidential information. These designs are a reinterpretation of the original.</p>

			<Par>
				<Sec title="My Role" />

				I led the design for the driving interface between July and November 2018. I worked alongside the CEO of the company, a project manager, a senior industrial designer and a software developer.
					<Br></Br>
				I stopped working on the project during the UI definition phase to focus on another app for the same company.
					<Br></Br>
				The Milestone was achieved shortly after.
			</Par>
			<Par>
				<Sec title="The challenge" />


			</Par>
			<ProJ>
				<More
					link1="./newsee"
					title1="Newsee"
					bgImagei="https://www.historic-newspapers.co.uk/app/uploads/2019/07/Original-newspapers-1.jpg"
					className="blue" />
				<More
					link1="./vw"
					title1=""
					bgImagei="https://cdn.motor1.com/images/mgl/2RQQg/s4/volkswagen-new-logo.jpg"
					className="white" />
				<More
					link1="./enovia"
					title1="e-Novia"
					bgImagei="https://e-novia.it/wp-content/themes/wp-bootstrap-starter-child/images/visit-us.jpg"
					className="green" />
			</ProJ>
		</main>
	);
}
