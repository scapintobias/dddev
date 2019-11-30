import React from "react";

import {
	Date,
	Raster,
	Title,
	Par,
	SinImg,
	ThreeImg,
	TwoImg,
	ParImg,
	Br
} from "./components.jsx";
import {Footer} from "../footer.jsx";
export function Enovia() {
	return (
		<main>
			<Raster>
				<Date place="Milan" time="MAY—NOV—2018" />
				<Title
					title="e-Novia"
					subtitle="The enterprise factory"
					description="A sourceful experience."
					line2="Where I learned to play as a team member, to pitch my idea to the CEO, and—vital—when to shut up."
				/>
				<Par>
					When my MS courses finished on January 2018, everybody was just
					missing the mandatory internship. In order to graduate, Politecnico
					wanted everybody to do a 250-hours internship, to summarise all the
					expertise gained in the last two semesters, focused primarily on UX
					and Product design. Many of my colleagues accepted almost any offer
					they were given—indeed not considering ux-related offers only—just to
					put in the hours. I decided to approach this differently. This piece
					is not mistakenly included among the ‘case studies’, because—as you
					will gather soon—I approached my research for an internship as I would
					with any other project. I therefore started defining the brief.
					<p className="helvetica fw7 pt3">Brief</p>I wanted to land an
					internship which was longer than the mandatory 250 hours (spoiler: at
					the end the hours were exactly one thousand) extremely UX focused, in
					a corporate environment but with some start-up ingredients. The
					company should have been in the tech industry, and I should have had
					complete and indiscriminate access to engineers of all sorts. Yes, I
					like to set the bar quite high, but I guess is the only way of
					achieving something. <p className="helvetica fw7 pt3">Constraints</p>{" "}
					Having been completely absorbed by university in the last couple
					months, I had to get back to my freelance clients, and this kept me
					from starting this project for quite some time. I only had the
					possibility to start the research well into April.
					<p className="helvetica fw7 pt3">Research</p>
				</Par>
			</Raster>
			<Footer />
		</main>
	);
}

export function DisciplineDesign() {
	return (
		<main>
			<Raster>
				<Date place="Italy/UK" time="MAY 2008—Today" />
				<Title
					title="DD"
					subtitle="A design story"
					description="A life journey."
					line2="The personal brand I founded, and how this website came to be."
				/>
				<SinImg oneimg="/img/dd_1.png" />
				<Par>
					I was born in the Venice’ countryside, in a family of architects and
					designers. And that has been a strong starting point. Soon after
					middle school, I met Maurizio and Armando Milani, fellow designers of
					Massimo Vignelli, and that ensured me, my path had to be in design
					either, I was, ad am, completely fond. The actual rollercoaster really
					started when in 2008 the aforementioned brothers had at hand a rebrand
					to do, for the cultural centre not far from the school I was
					attending, and called me in, asking if I wanted to join them for a
					closed workshop, with the purpose to deliver the corporate image. I
					accepted. I have always been taught by all-rounders, who perhaps
					didn’t intend to move that part of their knowledge to the actual
					student, because from the 70s many things changed. I soon understood
					by myself I was to be an all rounder too, I’m far too passionate about
					each and every field of design not to be eager to showcase wide
					projects including e.g. a lamp, the packaging, and the ad campaign
					with photos, posters and catalogues to promote this idea machined into
					something real. In high school I majored in printing, graphic design
					and photography. This means I spent almost 30 hours a week either in a
					dark room, developing film, in a printing lab, learning how to
					screen-print, etch zinc, preparing and printing offset plates by hand
					(no digital tools involved) or designing books and corporate images.
					Completed this first deep dive into design, I decided to move to
					London, where I had the possibility to place in the real world all the
					skills I had been sharpening in school labs.
				</Par>
				<SinImg oneimg="https://source.unsplash.com/random/800x800/?design" />
				<Par>
					When choosing which university course to undertake, I considered many,
					but all in all, what I wanted was something as strong as engineering,
					deep as architecture, and detailed as a medium-format photograph. The
					match was Communication Design at the Milan Polytechnic, which
					embodies each and every aspect of my idea of design: disciplined, fast
					paced, and with very strong foundations. This long-lasting learning
					journey, helped me understand what exactly I can deem to be keen on,
					in the infinite field of design. Since the first steps—and of course
					it still hasn’t changed—I felt soundly bound to typography; it started
					I guess when I was asked to draw freehand the whole Bodoni and Neue
					Haas Grotesk alphabets, back in 2007, and that set off the basic
					instinct to become really accurate in seizing the right font, kerning
					and typographical grid for each and every task. Since I spent a lot of
					time learning how to actually print, the fastest turnaround was to
					step back, and understand how to design something in order to shape
					precisely the final printed result; so I approached designing books,
					catalogues, and anything that could stand on paper. Never forgetting
					the digital world growing around me, and trying to translate the rules
					drawn for printing, into digital objects.
				</Par>
				<ThreeImg
					image1="https://source.unsplash.com/random/400x350/?design"
					image2="https://source.unsplash.com/random/400x350/?city"
					image3="https://source.unsplash.com/random/400x350/?company"
				/>
				<Par>
					My final project at university has been the redesign of a poem
					collection by Aldo Palazzeschi, which was published in 1930; resulting
					a quite successful effort to combine poetry and photography, in a
					visual book. Beyond those two major aspects, I tried in the years to
					channel my hobbies and passions into facets of my professional
					spectrum, be it photography, wayfinding, music production, industrial,
					web, or exhibit design. Architecture had a strong impact on my design
					taste, and has been part of my life ever since; many years ago I
					started a blog, trying to collect everything I liked, ranging from
					design to civil engineering. In these years, since 2009, I started my
					own design consultancy, named DisciplineDesign, based between Milan
					and London. The motto is ‘Design support, from the spoon to the city’,
					quoting Ernesto Nathan Rogers.
				</Par>
				<TwoImg
					image1="https://source.unsplash.com/random/400x400/?design"
					image2="https://source.unsplash.com/random/400x400/?city"
				/>
			</Raster>
			<Footer />
		</main>
	);
}

export function metrodelima() {
	return (
		<main>
			<Raster>
				<Date place="Italy/Perù" time="March-August 2019" />
				<Title
					title="Metro de Lima"
					subtitle="Linea 2"
					description="The ticket issue."
					line2="After designing its wayfinding system earlier this year, we went back for the interface of the new ticket kiosks."
				/>

				<Par>
					<p className="helvetica pt2 pb2 silver fw7">Preamble</p>
					<p className="pb2">
						I have always been fascinated about public transportation. Living in
						Milan for a while gave me the possibility to peruse its iconic
						wayfinding system, which later led the shaping of the MTA,
						Washington DC and São Paolo signage systems. So I was very excited
						when proposed with this project, back in March, which outcome you
						can find{" "}
						<a
							className="helvetica link hover-orange fw7"
							target="_blank"
							href="http://anonima.design/archive/cat/34_lima.html"
						>
							here
						</a>
						<Br />
						This time around, I was back with my Product Designer hat, in order
						to develop an interface.
					</p>
					<hr className="navy"></hr>
					<p className="helvetica pt2 pb2 silver fw7">Brief</p>
					<p className="pb2">
						The brief has been very clear from the beginning: develop the new
						interface of the ticket kiosks, relying on the graphic standards we
						designed in march.
					</p>
					<hr className="navy mt4"></hr>
					<p className="helvetica pt2 pb2 silver fw7">Team</p>
					Tobias, <i>Product Designer</i>—Samuel, <i>Architect, UI designer</i>
					—Alexandra, <i>Software Developer</i>—Rodolfo,{" "}
					<i>Industrial designer</i>.
					<p className="helvetica pt2 pb2 silver fw7">Role</p>
					<p className="pb2">
						As a product designer I had various responsibilities: directing the
						research effort and draw the necessary conclusions, overseeing the
						production of the typographical system, in order to comply with
						digital screen legibility, define the information architecture,
						sketch the screens, and define the user experience of the ticket
						kiosk. At the end of the first iteration, my duties encompassed the
						planning for future developements, and assuring everyone was handed
						off the appropriate documentation to develope all the solutions
						within the designed system. Due to the political crysis in the late
						summer of 2019, the project was stopped, as well as the developement
						of the line.
					</p>
				</Par>
				<SinImg oneimg="https://images.unsplash.com/photo-1496086278971-a39dad3a228f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" />
				<Par>
					<p className="helvetica pt2 pb2 silver fw7">Process</p>
					<p className="pb2">
						The first stage of the process consisted in a vast analysis of all
						the available material of both the existing and the future lines, in
						order to comprehend the vastness and complexity of the system, and
						its actual wayfinding. The outcome of this research has shown vast
						possibilities of improvement, from both a design and infrastructural
						integration perspective, to solve the lack of scalability,
						legibility, and consistency.<br></br>
						<br></br> The second stage consisted in the evaluation of the
						available channels to convey information through, which consist in:
						map, station signage, train signage, etc.<br></br>
						<br></br>The third stage consisted in the developement of a coherent
						system, which takes advantage of the stations’ architecture, has a
						inner modularity (hence using the pillars), and provides in a clear
						way the few but essential informations (station name, train
						direction, entries and exits)<br></br>
						<br></br> The fourth stage, consisted in
					</p>
					<p className="pt3"></p>
				</Par>
			</Raster>
			<Footer />
		</main>
	);
}
