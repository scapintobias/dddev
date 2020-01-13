import React from "react";
import {
	Title,
	Br,
	ProJ,
	More
} from "./components.jsx";
import {Par} from "./article.jsx";
export function Enovia() {
	return (
		<main>


				<Title
					place="Milan" time="MAY—NOV—2018" position="Product Design Intern"
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
					<Br/>
					I wanted to land an internship which was longer than the mandatory 250 hours (spoiler: at the end the hours were exactly one thousand) extremely UX focused, in a corporate environment but with some start-up ingredients. The company should have been in the tech industry, and I should have had complete and indiscriminate access to engineers of all sorts.
					<Br/>
					Yes, I like to set the bar quite high, but I guess that’s the only way of achieving something.
				</Par>
				<Par title="The catch">
					I started looking into all the incubators distributed well around the city, but no one seemed to
					have an in-house design team, or being even vaguely design driven, so I moved on. One afternoon I
					was giving the last chance to my university’s career service, and I stumbled into this open position
					for a UX/UI internship at e-Novia, The Enterprises Factory. Sounded impressive. I then packed up my
					portfolio, and sent the application.
					<Br/>
					The interviews went through quite smoothly, and just days from the end of May, I met the team and
					started the journey.
				</Par>
				<Par title="The Company">
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
				</Par>
				<Par title="My role">
					Considering I was actually the last one arrived at the company, and I was covering just an internship position, nobody ever treated me like one. I endeavoured this experience as a full-time job, a breakpoint in my to-be career, and not just a mandatory internship, and that soon delivered. I was part of the team, had the same responsibilities of the others, the same opportunities to raise my voice and convey opinions, which were always listened to and pondered on. From a confidence point of view, that has been a huge boost from the very beginning.
					<Br/>
					I mainly focused on the fields of collaborative mobility, SaaS and augmented reality, with the startups Yape, Blimp and Weart, developing a wide range of hard and soft skills of the Product Design spectrum: from brainstorming and early-sketches of ideas, wireframing, defining the experience, low and high fidelity mockups, user testing and whatnot, to the polished finished interfaces delivered to the developers for implementation and following iterations.
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
					project I was involved in, you can have a peak, or—if you prefer—dive down into the specific file:
				</Par>
				<ProJ>
					<More
						link1="./newsee"
						title1="Newsee"
						bgImagei="https://www.historic-newspapers.co.uk/app/uploads/2019/07/Original-newspapers-1.jpg"
						className="blue"/>
					<More
						link1="./vw"
						title1=""
						bgImagei="https://cdn.motor1.com/images/mgl/2RQQg/s4/volkswagen-new-logo.jpg"
						className="white"/>
					<More
						link1="./yape"
						title1="Yape"
						bgImagei="https://www.gelestatic.it/thimg/rnqyJLk1rTkNQzYkLmh3aHHRtkY=/fit-in/960x540/https%3A//www.lastampa.it/image/contentid/policy%3A1.36532592%3A1561987740/347a8858-95fe-11e9-885d-a4a5552cec84_6_Yape_REV01-kkiH-U11203768442353oqE-1024x576%40LaStampa.it.jpg%3Ff%3Ddetail_558%26h%3D720%26w%3D1280%26%24p%24f%24h%24w%3Da139b42"
						className="gold"/>
				</ProJ>

		</main>
	);
}
