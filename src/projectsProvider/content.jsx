import React from "react";
import { Link } from "react-router-dom";
import {
	Par,
	Sec, Sub, ParImg, Iltr, Img
} from "./components.jsx";



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
			<Img oneimg="http://anonima.design/archive/img/pantone/pantone_2.png" />
			<Iltr
				img="http://anonima.design/archive/img/corte/corte_type.png"
				par="Specimens of the font involved for composing the logo and the rest of the Corporate Image."
				tit="Gill Sans"
				par1="Gill Sans was designed by Eric Gill: a versatile, brilliant, and prolifically successful designer of the early part of the last century. One of the main reasons for the enduring success of his namesake design is that it is based on Roman character shapes and proportions, making it unlike virtually any other sans serif out there. Gill also worked his own warmth and humanity into his design, resulting in a typeface in which each weight retains a distinct personality of its own."
				tit1="Our Bodoni"
				par2="Commissioned by Bert Di Pamphilis of WTC and designed by Tom Carnase under the direction of Massimo Vignelli. The goal of this 1989 Bodoni revival was to match the proportions of Helvetica."
			/>
		</main> )
};
/*
createImage( "", "Meow" ),
	desc(),
	imgLtR( "", "Meow",
		"", "Our Headline", " ", " Our Bodoni", "Commissioned by Bert Di Pamphilis of WTC and designed by Tom Carnase under the direction of Massimo Vignelli. The goal of this 1989 Bodoni revival was to match the proportions of Helvetica." )
)*/