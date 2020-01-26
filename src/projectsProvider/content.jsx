import React from "react";
import { Link } from "react-router-dom";
import {
	Par,
	Sec, Sub, ParImg, Iltr, Img, Br, TwoImg
} from "./components.jsx";
import "./style.css"


export function Heatwave() {
	return (
		<main>
			<Img oneimg="http://anonima.design/archive/img/numeriprimi/primi_1.png" />
			<Iltr
				img="http://anonima.design/archive/img/numeriprimi/primi_4.png"
				par="Specimens of the font involved for composing the logo and the rest of the Corporate Image."
				tit="Our Headline"
				par1="Originally drawn by Walter Haettenschweiler in 1954, derived from an assignment by Ernst Keller at Kunstgewerbeschule Zürich, and made as an improvement over Commercial - Grotesk( Haas, 1940 ).No lowercase.[Swiss Type Design ] Included in Lettera vol.1, an alphabet source book edited by Alex Stocker and Armin Haab.Also known simply as Schmalfette ( Bold Condensed).No official digital version is available, therefore  for the purpose of the project the entire typeface has been redesigned from scratch based on the original drawings, and it 's not commercially available."
			/>
		</main> )
};
export function Pantone() {
	return (
		<main>
			<div className="gridp">
				<img src="/archive/pantone/cocktails/A.png" alt='cocktail' />
				<img src="/archive/pantone/cocktails/B.png" alt='cocktail' />
				<img src="/archive/pantone/cocktails/C.png" alt='cocktail' />
				<img src="/archive/pantone/cocktails/D.png" alt='cocktail' />
			</div>
			<Par className="pb3">
				Colour schemes became popular in the mid-sixties, purely among printing technicians and design professionals. In the last few years, the most renowned ink company, <span className="b helvetica fw7">PANTONE</span>, decided to widen its audience, gaining a spot into everyday people’s lives. Plates, china-ware, phone covers and stationery—labelled with the iconic colours—made their way to the masses. We thought this was not enough. Why not to take a step forward? Instead of being a mere ornament, why shouldn’t it be given the chance to become the essence as well? During one of the foremost design-focused events, the Milan Design Week/Salone Del Mobile 2018, we offer the hundreds of thousands visitors who will gather in the city throughout the week the possibility to dive into a whole new coloured sociality. The audience will be able to taste six specially crafted cocktails, based on cherry-picked swatches in an accurately designed space, thoroughly immersed in the electric vibe of the Fuorisalone. For the entire week we will transform a completely empty space—in the heart of the event—into an incubator of the new <span className="b helvetica fw7">PANTONE</span> experience, where the visitors will have the chance to enjoy the peculiar beverages immersed into a carefully customised environment. The brand in its decades-long practice managed to impose itself as the standard in the design community; which focus has shifted from a very technical point of view towards a more liquid attitude. It is essential to allow the trademark to propose itself under a whole new light, with new communication assets able to ink the way into the future of design again.
			<Sec
					title="PANTONE inks marking the nights"
					subtitle="of the brightest Design event."
				/>
				In Milan we see every year all sort of attractions, but our team always feels something missing, poorly designed or with bad organization. Therefore we decided to take a leap forward, break all the issues to pieces, and transform every detail into something specifically designed around people, the experience, and the impact it has to generate. We are designers and architects, it might be difficult to believe, but we cannot do everything by ourselves. So, for the sake of best practices, we endorse collaborations with third party companies we trust, who will provide the necessary experience and skills not directly available. We have in mind an iconic space carefully designed by our team of architects, and furnished by our interior designers, with lightweight but essential interventions customised according to the company’s needs and identity, but keeping the users in the centre. The space we want to build will attract and welcome as many visitors as possible, allowing them to fully enjoy what we call the new <span className="b helvetica fw7">PANTONE</span> Experience: they will have the chance to taste a selection of carefully prepared drinks, exclusively blended for the specific event by a group of inventive bartenders, inspired by a trending palette that <span className="b helvetica fw7">PANTONE</span> together with our creatives, will select. #drinkpantone: an immersive experience, a bold design, a colourful, tendsetting social event – just like <span className="b helvetica fw7">PANTONE</span>.
			</Par>
			<Img oneimg="/archive/pantone/pantone_2.png" />
			<Img oneimg="/archive/pantone/tram.png" />
		</main> )
};


export function Richmond() {
	return (
		<main>
			<Img oneimg="/archive/richmond.png"
				className="w-50 w-100-m center"
			/>
		</main> )
};
export function Hospital() {
	return (
		<main>
			<Img oneimg="/archive/stblogo/stb_1.png"
			
			/>
			<Iltr
				img="/archive/stblogo/stb_2.png"
				par="Specimens of the font involved for composing the logo and the rest of the Corporate Image."
				tit="Neue Haas Grotesk"
				par1="AThe first weights of Neue Haas Grotesk were designed in 1957-1958 by Max Miedinger for the Haas’sche Schriftgiesserei in Switzerland, with art direction by the company’s principal, Eduard Hoffmann. Neue Haas Grotesk was to be the answer
				to the British and German grotesques that had become hugely popular thanks to the success of functionalist Swiss typography. The typeface was soon revised and released as Helvetica by Linotype AG."
				tit1="ITC Garamond"
				par2="Drawn by Tony Stan, ITC Garamond was first released in 1975 in Book and Ultra weights only. These were intended as display faces to complement existing text designs from other foundries. (In fact, many of ITC’s interpretations of traditional typefaces began as display counterparts for existing text designs.) These first weights of ITC Garamond became so popular, however, that ITC released the Light and Bold weights and a suite of condensed faces in 1977. Now, the complete ITC Garamond family features sixteen members: four weights of roman
				and italic in normal width and four weights of roman and italic in companion condensed versions. The family resemblance is there, but ITC Garamond’s unique provenance gives it an unmistakable, one-of-a-kind appeal."
			/>
			<Img oneimg="/archive/stblogo/stb_3.png" />
			<Img oneimg="/archive/stblogo/stb_4.png" />
		</main> )
};

export function A() {
	return (
		<main>
			<Img oneimg="/archive/A.png"
				className="w-60 w-100-l w-100-t w-100-m center"
			/>
		</main> )
};
export function Abstract() {
	return (
		<main>
			<Img oneimg="/archive/minimal.png"
				className="w-60 w-100-l w-100-t w-100-m center"
			/>
		</main> )
};

export function Craf() {
	return (
		<main>
			<Img oneimg="/archive/craf/craf_1.png" />
			<Par>
				This logo and Corporate Image have been developed during a workshop with Armando Milani giving some fundamental theoric lessons, and his brother Maurizio focusing on the production compartment. The very limited group of people granted me the possibility to design it four-handedly in a very close collaboration with him. Funnily enough, this workshop should have been participated by Massimo Vignelli too, but for personal reason had to decline.
				<Br />
				Many people feel ashamed showing their first projects. I could dig more into the archives and find lots of logos from the 2006-2008 period, but they wouldn't be as meaningful as this. And the reason is quite clear. Before meeting with Armando and Maurizio, I had a very fond appreciacion of everything design-related, but I was skeptical about turning into the core business of my profession. So this, rather than the first project at all, is the first project I designed with DisciplineDesign in mind, and a remainder of a spectacular encounter, where my career started to shape.

			</Par>
			<Iltr
				img="/archive/craf/craf_fonts.png"
				par="Specimens of the font involved for composing the logo and the rest of the Corporate Image."
				tit="Permanent Headline"
				par1="A bold, highly compressed sans-serif typeface in the neo-grotesque style. It was designed by Karlgeorg Hoefer for the type foundry Ludwig & Mayer in Frankfurt am Main. It was released from 1964 and later issued by a range of companies in phototypesetting and digital versions."
				link="http://www.klingspor-museum.de/KlingsporKuenstler/Schriftdesigner/Hoefer/KGHoefer.pdf"
				number="1"
				tit1="Rotis Sans"
				par2="A typeface developed in 1988 by Otl Aicher, who explores an attempt at maximum legibility through a highly unified yet varied typeface family that ranges from full serif, glyphic, and sans-serif. The four basic Rotis variants are: Rotis Serif, Rotis Semi-Serif, Rotis Semi-Sans, Rotis-Sans. In this case we used Rotis semi-sans (semi-grotesque) — with zero serifs but with stroke width variation"
			/>
			<Img oneimg="/archive/craf/craf_2.png" />

			<TwoImg
				image1="/archive/craf/craf_4.png"
				image2="/archive/craf/craf_6.png"
			/>
			<Img oneimg="/archive/craf/craf_7.png" />
		</main> )
};