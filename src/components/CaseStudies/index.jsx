import React from "react";
import {Link} from "react-router-dom";
import {
	Date,
	Raster,
	Title,
	Par,
	TwoImg,
	ParImg,
	SinImg,
	Br,
	More,
	Biblio
} from "./components.jsx";
import Vimeo from '@u-wave/react-vimeo';
import {Collapsible} from "./accordion.jsx";

export function Weart() {
	return (
		<main>
			<Raster>
				<Date place="e-Novia" time="SEPT-NOV—2018"/>
				<Title
					title="Weart"
					subtitle="Digitalizing The Sense Of Touch"
					description="weart devices enable tactile communication and augmented multimedia contents."
					line2="From quirky additions to gaming and team building programs, to serious, in-depth training for hazardous professions."/>
				<SinImg oneimg="/img/weart.png"/>
				<Par>
					I arrived at the company partly unaware of what all the startups were actually doing, but Yape...it
					caught my eye almost instantly. You cannot resist falling in love with it the first time you see
					this funny contraption running around the company.
					<Br/>
					I wasn’t involved since the very start of my time at the company, and the first task I was given was
					the start-up’s corporate image. But if you were here to read more about the actual interaction
					project, why haven't you skipped it already?
				</Par>
				<More
					link1="./enovia"
					title1="e-Novia"
					bgImagei="https://e-novia.it/wp-content/themes/wp-bootstrap-starter-child/images/visit-us.jpg"
					className="hover-green white pl2"
					link2="./yape"
					title2="Yape"
					bgImageii="https://www.gelestatic.it/thimg/rnqyJLk1rTkNQzYkLmh3aHHRtkY=/fit-in/960x540/https%3A//www.lastampa.it/image/contentid/policy%3A1.36532592%3A1561987740/347a8858-95fe-11e9-885d-a4a5552cec84_6_Yape_REV01-kkiH-U11203768442353oqE-1024x576%40LaStampa.it.jpg%3Ff%3Ddetail_558%26h%3D720%26w%3D1280%26%24p%24f%24h%24w%3Da139b42"
					classNamee="hover-gold white pl2"
					link3="./blimp"
					title3="Blimp"
					bgImageiii="https://blimp.ai/wp-content/uploads/elementor/thumbs/Retail-Cover-oga04tvn5qeo66bcl3842b2ocjtdb22p3cdm3er5m0.jpg"
					classNameee="hover-light-purple white pl2"/>
			</Raster>
		</main>
	);
}
export function Yape() {
	return (
		<main>
			<Raster>
				<Date place="e-Novia" time="MAY—NOV—2018"/>
				<Title
					title="Yape"
					subtitle="Self-driving robot"
					description="Case Study on a teleoperation interface"
					line2="Yape is now a self-driving robot, but to reach these capabilities, it had to go through a long process of research and developement in many different fields.
"/>
				<Par>
					<span className="i orange f3 fw6">Here I will share what I did during the period I joined the team.<br></br>
						Many things will have to be redacted, following NDAs.</span>
					<Br/>
					My journey with Yape has been widely unique.
					<Br/>
					I arrived at the company partly unaware of what all the startups were actually doing, but Yape...it
					caught my eye almost instantly. You cannot resist falling in love with it the first time you see
					this funny contraption running around the company.
					<Br/>
					I wasn’t involved since the very start of my time at the company, and the first task I was given was
					the start-up’s corporate image. But if you were here to read more about the actual interaction
					project, why haven't you skipped it already?
					<Br/>
					<Collapsible button="Read more about the corporate image">
						As I said in the{" "}
						<Link to="./enovia">
							<span className="helvetica fw7 f4 link hover-animate hover-green">
								e-Novia
							</span>
						</Link>{" "}
						file, soon came out I had to convince a worryingly uninterested CEO about what I had designed, and I
						took it as a personal challenge.
						<Br/>
						So I followed a well defined UX process for him to discover the new corporate image, with the brief
						containing only few words:
						<Br/>
						<span className="helvetica orange">
							“You have to design something visually powerful and intellectually elegant, and you have to give
							[the CEO] a presentation with the only purpose of him to like it at first glance”.
						</span>
						<Br/>I started researching, as I would with an app or a website. And I soon found some key points
							where I could easily strike and win.
						<Br/>
						I took in account his age, what was the design when he was our age, what were his personal
						interests, and what always put a sparkle in his eyes.
						<Br/>
						He really liked technology and technology advancements, and revolution in the transport industry. I
						immediately thought I had two aces up my sleeves. So I went back and forth to reassure myself I was
						on the right path.
						<Br/>
						What’s the biggest IT company ever existed, which was around when he was our age? IBM.
						<Br/>
						What’s the company Steve Jobs built after leaving Apple in 1985? NeXT.
						<Br/>
						What’s the biggest impact communication design had on transport? The MTA signage system in 1966 and
						The new AmericanAirlines corporate image in 1967.
						<Br/>
						What this weird combination of events have in common? The designers.
						<Br/>
						Paul Rand designed both the IBM and the NeXT logos, and Massimo Vignelli the signage system and the
						AA corporate image, and sometimes did some work for IBM too.
						<Br/>
						When narrating the story to the CEO, I used these props to win him over, and I succeeded.
						<ParImg oneimg="https://www.startupitaliaopensummit.eu/wp-content/uploads/2019/11/Yape_logo.png"/>
					</Collapsible>
					<p className="helvetica f1 fw6 tracked pt3">Driving a drone remotely</p>
					<ParImg oneimg="https://e-novia.it/wp-content/uploads/2018/11/6_Yape_REV01.jpg"/>
					<p className="helvetica fw6 f2 tracked pt3">Team</p>
					The team was composed by me, the product designer, a senior industrial designer who supervised my
					work, and the team of engineers of Yape s.r.l.; when the interface was almost entirely finished and
					implemented I was joined by another intern, when we focused on a delivery app.
					<p className="helvetica fw6 f2 tracked pt3">Structure and management</p>
					When I arrived, the engineering team had already solved the majority of the mechanical issues, and
					implemented an alpha version of the guiding software, allowing to drive the drone by sight, with a
					standard joypad. The next step was to push the development forward, aiming at the completely remote
					driving of the drone, while the driver was comfortably sat in a control room, receiving data
					transmitted from the vehicle's sensors as an input.
					<Br/>
					It was therefore essential taking in consideration the filtered visual perception, and how to convey
					visually some digital aids we as humans usually perceive from the outer world with our senses.
					<Br/>
					During the first step of the project, there had to be acquired some knowledge about ugvs (unmanned
					ground vehicles), both from a mechanical point of view: how the chassis is built, how the motors
					work, which are the physical limits of movement given by these motors; and an electronic point of
					view: the type of sensors mounted aboard, what kind of camera is available and what type of video is
					capable of detect, how and which data are transmitted from and to the vehicle by the control room,
					what are the features of the programming language used etc.
					<Br/>
					This step has been very helpful in defining the limits of the research, and understanding how to
					integrate the interface design into this extremely complex system.
					<ParImg
						oneimg="https://images.unsplash.com/photo-1501290741922-b56c0d0884af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3574&q=80"/>
					<p className="helvetica fw6 f2 tracked pt3">My role</p>
					Although the drive-by-sight was completely functional, the only features already implemented for the
					remote control were the decoding of the visual feed from the camera, and an horizontal white bar
					advancing as the drone accelerated, but with no indication of the actual speed or aids that helped
					you understand the indicator at a glance.
					<Br/>
					The role of the designer has actually been, taking advantage of the specific knowledge of
					interaction and interface design, define which were the bare minimum requisites for a very fluid
					remote control, and which were the problems to solve for achieving this goal, outlining the research
					path, performing the research, analyse both that data, and the data the engineers had been gaining
					through their set of tests, and use it to deline the functionalities. Then the wireframing and
					sketching would start, followed by a working invision prototype, as a proof of concept. Once
					approved, the actual production would begin, with the draw up of the whole documentation in
					anticipation of the handoff. Then, while the developers were implementing the first mvp, test sets
					were customised and later performed, and after few months of almost daily iterations the product
					would be considered finished and the milestone achieved.
					<p className="helvetica fw6 f2 tracked pt3">The research challenges</p>
					After some amount of time trying to deline which were the upmost problems to undertake, they can be
					divided into three groups:
					<Br/>
					<div className="orange f2 i">First group
						<p className="f3 navy i">Bound to the perception of the driver</p>
					</div>
					<ul className="list indent">
						<li>Resolve the perception of depth</li>
						<li>
							Resolve the perception of the radius of curvature</li>
						<li>
							Resolve the perception of the incline</li>
						<li>
							Resolve the perception of acceleration
						</li>
					</ul>
					<div className="orange f2 i pt3">Second group
						<p className="f3 navy i">Bound to the actual driving</p>
					</div>
					<ul className="list indent">
						<li>Design a reference system inside the viewport</li>
						<li>Design a pointing device, to ease the direction of the vehicle</li>
						<li>Calibrate the sensibility of the controller's commands</li>
					</ul>
					<div className="orange f2 i pt3">Third group
						<p className="f3 navy i">Bound to the position of the drone in the environment</p>
					</div>
					<ul className="list indent">
						<li>Define a visual representation of the data acquired by the LIDAR sensor</li>
						<li>Design a set of maps, to help positioning the drone in the urban environment</li>
					</ul>
					<ParImg oneimg="/img/lidar.jpg"/>
					<p className="helvetica fw6 f2 tracked pt3">The research areas</p>
					Defined the challenges, the research field became more clear and delimited. It started searching
					about general robotics, human-machine interaction and human-machine interface, with a focus on
					service robots, I needed a strong base of knowledge to comprehend and position the results of the
					actual research, being able to evaluate if they improved our specific project, or were general
					considerations, difficult to apply in a situation with well-defined limits.
					<p className="orange f2 i pt3">First group</p>
					<p className="pl4">The key target of this phase were the human factors, cognitive psychology, which
						are the way humans perceive through the senses, and how these senses behave when they're filtered by
						a display, by which we look through the drone's eyes, looking for bearings useful in driving;
						everything to find graphic solutions providing for the lack of analog signals, making the drive
						flawless and immersive.</p>
					<p className="orange f2 i pt3">Second group</p>
					<p className="pl4">Analised the filtered perception in a broad sense, the second group brings us in
						the centre of our project. Thus, the target of the research was to find similar situations where
						other designers had to solve similar issues, even in antithetical fields, to find cues for new
						thoughts. Among other examples: HUDs in combat jet fighters, the DaVinci system for telesurgery,
						parking sensors, and control rooms in general.</p>
					<p className="orange f2 i pt3">Third group</p>
					<p className="pl4">I searched into the graphic outputs of the LIDAR sensors, to understand whether
						it was possible to take advantage of something already available, or if it was necessary considering
						designing something new from the ground up. Having worked on custom interactive maps already, I
						ought to find out—again—whether I could re-use those solutions or not.</p>
					<TwoImg
						image1="/img/davinci.jpeg"
						className="w-60 w-100-l w-100-m"
						image2="/img/f18hud.jpg"
						classNamee="w-40 w-100-l w-100-m"/>
					<TwoImg
						image1="/img/parkassist.jpg"
						className="w-40 w-100-l w-100-m"
						image2="/img/mastercontrol.jpg"
						classNamee="w-60 w-100-l w-100-m"/>
					<TwoImg
						image1="/img/croom.jpg"
						className="w-50 w-100-l w-100-m"
						image2="/img/map.png"
						classNamee="w-50 w-100-l w-100-m"/>
					<Collapsible button="Research bibliography"><Biblio
						className="bb bt"
						author="Gray, H, illustrations of Carter, H"
						name="Anatomy: Descriptive and Surgical."
						publication="London: JohnW. Parker and Son, "
						year="1858."
						link="https://bit.ly/2TGpTtu"/>
						<Biblio
							className="bb"
							author="Guyton, A Hall, E"
							name="Textbook of medical physiology."
							publication="Elsevier Saunders, "
							year="2006."
							link="https://bit.ly/1sp9eWA"/>
						<Biblio
							className="bb"
							link="https://tinyurl.com/y52xdnqc"
							name="Human factors of visual and cognitive performance in driving."
							author="Cándida Castro"
							publication="CRC Press—Taylor and Francis Group, "
							year="2009."/>
						<Biblio
							className="bb"
							author="A C Newberry, MJ Griffin, M Dowson"
							name="Driver perception of steering feel."
							publication="Human Factors Research Unit, University of Southampton, "
							year="2007."
							link="https://doi.org/10.1243/09544070JAUTO415"/>
						<Biblio
							className="bb"
							author="Edmund Donges"
							name="A Two-LevelModel of Driver Steering Behavior."
							publication="The Human Factor Society,"
							year="1978"
							link="https://tinyurl.com/y37kqxoy"/>

						<Biblio
							className="bb"
							author="Cloete, S.R. &Wallis, G"
							name="Limitations of feedforward control in multiple-phase steering
						movements."
							publication="Experimental Brain Research,"
							year="2009,"
							pages="195: 481."
							link="https://doi.org/10.1007/s00221-009-1813-6"/>

						<Biblio
							className="bb"
							author="Wallis G, Chatziastros A, Bülthoff H"
							name="An unexpected role for visual feedback in vehicle steering control."
							publication="Max Planck Institute for Biological Cybernetics, "
							year="2002."
							link="https://doi.org/10.1007/s00221-009-1813-6"/>
						<Biblio
							className="bb"
							link="https://doi.org/10.1016/j.ergon.2006.06.013"
							name="The Effects of Graphical Interface Design Characteristics on Human–Computer Interaction Task Efficiency."
							author="R. Michalski, J. Grobelny and W. Karwowsk"
							year="2006."
							publication="International Journal of Industrial Ergonomics,"
							pages="vol. 36, pp. 959–977,"/>
						<Biblio
							className="bb"
							link="http://ps-2.kev009.com/rs6000/redbook-cd/gg244107.pdf"
							name="The library for system
						solutions End User Interface reference."
							author="International Business Machines"/>
						<Biblio
							className="bb"
							link="https://doi.org/10.1016/S0020-7373(81)80049-1"
							name="The ZOG Approach to Man-Machine Communication."
							author="O. Robertson, D. McCracken and A. Newell"
							year="1996."
							publication="International Journal of Human-Computer Studies, "
							pages="vol. 51, pp. 279-306"/>
						<Biblio
							className="bb"
							link="https://ieeexplore.ieee.org/document/5335992"
							name="Human-Machine Interface: Design Principles of Visual Information in Human-Machine Interface Design."
							author="C. Gong"
							year="2009."
							publication="International Conference on Intelligent Human-Machine Systems and Cybernetics, Hangzhou, Zhejiang,"
							pages="pp. 262-265."/></Collapsible>
					<p className="helvetica fw6 f2 tracked pt3">Solutions</p>
					<p className="orange f2 i">Driving reference system</p>
					The main interface whom we interact with is the webcam's stream situated on the front side of the
					vehicle. It has the advantage of a very high compression ratio, which doesn't indeed interfere a lot
					with the bandwidth; however with notable disadvantages: the signal's quality is not stable, and the
					optical aberration is quite bothering, making the drive on a straight line close to impossible,
					using only the video stream as a reference. To fix these issues, it was decided to use existing the
					solutions emerged from the research and adapt them to our needs.
					<p className="f3 navy pt3 i">Pointing and direction</p>
					<p className="pl4">The first thing to be taken into consideration was a central viewfinder, in order
						to have a pointing module, and to have a brief indication of the direction of the drone. Which since
						the first tests proved to be useful, but not sufficient. To solve the problem, the solution used is
						resembling the functionality that in cars allows us to park comfortably in reverse; using the same
						mechanism, simply with a front webcam and not with a rear one. For straight-line driving, this gives
						us a precise indication of the width of the vehicle's track, when you intend to turn, the onboard
						computer also sends the speed differential data between one wheel and the other to the control room
						and through an algorithm, we are able to have in the viewport the indication of the curvature of the
						trajectory too, through two simple beziér curves.</p>
					<p className="f3 navy pt3 i">Inclination and slope</p>
					<p className="pl4">To overcome the tilting of the vehicle when accelerating and stopping, we took
						inspiration from the artificial horizon present in the aeronautical cockpits — originally born as an
						analogue instrument, and then rendered digitally in the HUDs, inserting in the viewport two fixed
						horizontal lines, calibrated with respect to the camera , so as to have a fixed point of reference
						when the drone tilts forward or backward. The lines are white in a vertical position, red when
						toggling forward and yellow when tilting back. This helps us even when the vehicle has to face a
						climb or a descent, and being able to stop it when we realize the ascent or descent is too steep for
						the vehicle's internal capabilities.</p>

					<p className="f3 navy pt3 i">Speed and acceleration</p>
					<p className="pl4">
						Taking into account the strong distortion given by the wide-angle lens of the main camera, and the
						low power response capability of the two controller joysticks, making acceleration perceptible and
						having a clear speed feedback is fundamental. The joysticks have a discrete motion, but zero
						resistance. So I can floor the accelerator, without knowing how much it equates in terms of physical
						acceleration of the vehicle. Resuming the research, it was decided to include two separate
						indicators. One responsible for showing the speed of the vehicle, divided over three levels of
						travel (comparable to the automatic transmissions of the 'P' 'D' 'Sport' cars), and the other in
						charge of indicating the level of pressure that the driver places on the joystick. However, an
						indication in km/h on the second screen is always present.</p>

					<p className="orange f2 i">Perception of depth and position of the vehicle</p>
					To solve the perception of depth, starting from the concepts found in the research, an integrated
					indicator cannot be used, as can be for speed, but the combination of several visual solutions is
					necessary, partly exploiting the interactivity of the direction indicators, and partly relying on
					the display of data received from the lidar sensor.
					<p className="f3 navy pt3 i">LIDAR sensors</p>
					<p className="pl4">the raw data received from the LIDAR and processed by the native software made a
						result too chaotic, going to frustrate its usefulness, therefore the development team generated an
						algorithm with which to obtain an azimuthal view in which only simple lines defining the perimeters
						of the elements in the vicinity.
					</p>
					<p className="f3 navy pt3 i">Maps</p>
					<p className="pl4">
						It was therefore decided to use Mapbox, verified its great versatility in the modification of
						styles, and its precision due to the support on the Openstreetmap software. In this example the
						roads and pedestrian paths are very contrasted with respect to the buildings, so that visibility is
						high even when the map is particularly small, or a glance is given to the flight during driving
						operations, where concentration must remain at the camera flow and lidars, to avoid any sudden
						obstacles.</p>
					<p className="helvetica fw6 f2 tracked pt3">Interface</p>
					<ParImg oneimg="/img/primaryl.jpg"/>

					<Vimeo video="https://vimeo.com/378123669" width="680px" responsive className="mt3"/>
					<p className="helvetica fw6 f2 tracked pt3">Outcome</p>
					Closing this milestone helped the company secure a new set of investors, and collabs all over the
					world.
					<Biblio
						className="bb bt mt3 w-50"
						link="https://gigalife.vodafone.com/il-postino-5g-yape-robot-postman-delivery/"
						author="Japan Post"/>
					<Biblio
						className="bb w-50"
						link="http://www.airport-world.com/news/general-news/7353-new-robot-on-duty-at-frankfurt-airport.html"
						author="Frankfurt Airport"/>
				</Par>

				<More
					link1="./enovia"
					title1="e-Novia"
					bgImagei="https://e-novia.it/wp-content/themes/wp-bootstrap-starter-child/images/visit-us.jpg"
					className="hover-green white pl2"
					link2="./blimp"
					title2="Blimp"
					bgImageii="https://blimp.ai/wp-content/uploads/elementor/thumbs/Retail-Cover-oga04tvn5qeo66bcl3842b2ocjtdb22p3cdm3er5m0.jpg"
					classNamee="hover-light-purple white pl2"
					link3="./weart"
					title3="Weart"
					bgImageiii="http://weart.it/wp-content/uploads/2017/05/MG_0167-1024x683.jpg"
					classNameee="hover-yellow white pl2"/>
			</Raster>

		</main>
	);
}
export function Blimp() {
	return (
		<main>
			<Raster>
				<Date place="e-Novia" time="JUL-OCT—2018"/>
				<Title
					title="Blimp"
					subtitle="Audience Sensing"
					description="From blank paper to implementation."
					line2="Blimp has developed technologies to bring the science of digital analytics, with its extensive audience data, to the physical world."/>
				<Par>
					When my MS courses finished on January 2018, everybody was just missing the mandatory internship. In
					order to graduate, Politecnico wanted everybody to do a 250-hours internship, to summarise all the
					expertise gained in the last two semesters, focused primarily on UX and Product design. Many of my
					colleagues accepted almost any offer they were given—indeed not considering ux-related offers
					only—just to put in the hours. I decided to approach this differently.
				</Par>
				<More
					link1="./enovia"
					title1="e-Novia"
					bgImagei="https://e-novia.it/wp-content/themes/wp-bootstrap-starter-child/images/visit-us.jpg"
					className="hover-green white pl2"
					link2="./yape"
					title2="Yape"
					bgImageii="https://www.gelestatic.it/thimg/rnqyJLk1rTkNQzYkLmh3aHHRtkY=/fit-in/960x540/https%3A//www.lastampa.it/image/contentid/policy%3A1.36532592%3A1561987740/347a8858-95fe-11e9-885d-a4a5552cec84_6_Yape_REV01-kkiH-U11203768442353oqE-1024x576%40LaStampa.it.jpg%3Ff%3Ddetail_558%26h%3D720%26w%3D1280%26%24p%24f%24h%24w%3Da139b42"
					classNamee="hover-gold white pl2"
					link3="./weart"
					title3="Weart"
					bgImageiii="http://weart.it/wp-content/uploads/2017/05/MG_0167-1024x683.jpg"
					classNameee="hover-yellow white pl2"/>
			</Raster>
		</main>
	);
}

export function Enovia() {
	return (
		<main>
			<Raster>
				<Date place="Milan" time="MAY—NOV—2018"/>
				<Title
					title="e-Novia"
					subtitle="The enterprises factory"
					description="A sourceful experience."
					line2="Where I learned to play as a team member, to pitch my idea to a CEO, and—vital—when to shut up."/>
				<Par>
					When the MS courses came to an end in the first quarter of 2018, everybody was just missing the
					mandatory internship. In order to graduate, Politecnico wanted everybody to do a 250-hours
					internship, to summarise all the expertise gained in the last two semesters, focused primarily on UX
					and Product design. Many of my colleagues accepted almost any offer they were given—indeed not
					considering ux-related offers only—just to put in the hours. I decided to approach this differently.
					<Br/>I wanted to land an internship which was longer than the mandatory 250 hours (spoiler: at the
						end the hours were exactly one thousand) extremely UX focused, in a corporate environment but with
						some start-up ingredients. The company should have been in the tech industry, and I should have had
						complete and indiscriminate access to engineers of all sorts.
					<Br/>
					Yes, I like to set the bar quite high, but I guess that’s the only way of achieving something.
					<p className="helvetica f1 fw6 tracked pt3">The catch</p>
					I started looking into all the incubators distributed well around the city, but no one seemed to
					have an in-house design team, or being even vaguely design driven, so I moved on. One afternoon I
					was giving the last chance to my university’s career service, and I stumbled into this open position
					for a UX/UI internship at e-Novia, The Enterprises Factory. Sounded impressive. I then packed up my
					portfolio, and sent the application.
					<Br/>
					The interviews went through quite smoothly, and just days from the end of May, I met the team and
					started the journey.
					<p className="helvetica f1 fw6 tracked pt3">The company</p>
					e-Novia is indeed design driven. Anything that happens, comes from the joined design studios,
					industrial and UX/UI, a team of ten designers who respond to the needs of the 14 startups the
					company is growing. I had two senior colleagues whom I was very honoured to be mentored by, helping
					me learn all the blurred lines UX design is made of, and I responded directly to an energetic CDO,
					always very concerned about the team working well together, growth paths and whatnot. I almost
					instantly felt at home, something very difficult in this kind of big tech industries.
					<Br/>
					Previously I said I wanted{" "}
					<i>
						“complete and indiscriminate access to engineers of all sorts”.
					</i>{" "}
					Well. Now I was surrounded by nearly 90 between software developers and engineers of the most
					various sort: computer, electronics, automation, mechanic, whatnot. I was in awe. Moreover, as time
					went by, and my learning curve turned into a plateau, I became more and more reliable, obtaining the
					respect and trust of each one of them, and that’s the best takeaway I can think of, when reminiscing
					about this experience.
					<p className="helvetica f1 fw6 tracked pt3">My role</p>
					Considering I was actually the last one arrived at the company, and I was covering just an
					internship position, nobody ever treated me like one. I endeavoured this experience as a full-time
					job, a breakpoint in my to-be career, and not just a mandatory internship, and that soon delivered.
					I was part of the team, had the same responsibilities of the others, the same opportunities to raise
					my voice and convey opinions, which were always listened to and pondered on. From a confidence point
					of view, that has been a huge boost from the very beginning.
					<Br/>I mainly focused on the fields of collaborative mobility, SaaS and augmented reality, with the
						startups Yape, Blimp and Weart, developing a wide range of hard and soft skills of the Product
						Design spectrum: from brainstorming and early-sketches of ideas, wireframing, defining the
						experience, low and high fidelity mockups, user testing and whatnot, to the polished finished
						interfaces delivered to the developers for implementation and following iterations.
					<Br/>
					Spending my teen-age learning how to move through different programming languages, I might not be a
					master of any, but I gained enough valuable knowledge to hold a productive conversation with
					developers, discussing for example whether we might be able to push the boundaries without too much
					of an effort, in order to achieve something new; and even when designing, I always kept them in
					mind, and that has helped a lot of flawless handoffs.
					<Br/>
					Having a strong background in brand design/corporate images, I had the opportunity to showcase those
					either in a few but poignant examples. Yape was going through what I usually call a ‘brand crisis’,
					and based on the confidence I had been building, they asked me if I wanted to have a go at it, not
					mentioning at the beginning all had to be presented to the CEO, who was considered ‘strongly not
					interested’ in visual changes and whatnot.
					<Br/>
					If you want to know more in detail what happened with the Yape corporate image, or what I did in the
					projects I was involved in, you can have a peak, or—if you prefer—dive down into the specific files.
				</Par>
				<More
					link1="./yape"
					title1="Yape"
					bgImagei="https://www.gelestatic.it/thimg/rnqyJLk1rTkNQzYkLmh3aHHRtkY=/fit-in/960x540/https%3A//www.lastampa.it/image/contentid/policy%3A1.36532592%3A1561987740/347a8858-95fe-11e9-885d-a4a5552cec84_6_Yape_REV01-kkiH-U11203768442353oqE-1024x576%40LaStampa.it.jpg%3Ff%3Ddetail_558%26h%3D720%26w%3D1280%26%24p%24f%24h%24w%3Da139b42"
					className="hover-gold tl white pl2"
					link2="./blimp"
					title2="Blimp"
					bgImageii="https://blimp.ai/wp-content/uploads/elementor/thumbs/Retail-Cover-oga04tvn5qeo66bcl3842b2ocjtdb22p3cdm3er5m0.jpg"
					classNamee="hover-light-purple white pl2"
					link3="./weart"
					title3="Weart"
					bgImageiii="http://weart.it/wp-content/uploads/2017/05/MG_0167-1024x683.jpg"
					classNameee="hover-yellow white pl2"/>
			</Raster>
		</main>
	);
}
