import React from "react";
import { Yape } from "../components/CaseStudies/yape";
import { Enovia } from "../components/CaseStudies/enovia";
import { Venues } from "../components/CaseStudies/musicvenues";

export function Drone() {
	return <Yape />;
}

export function Company() {
	return <Enovia />;
}

export function Music() {
	return <Venues />;
}