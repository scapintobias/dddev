import React from "react";
import { Image } from "../Image";
import { Desc } from "../text";

export function ProjectContent( { project } ) {
	const {/* title, subtitle, type, year,*/ content } = project;
	const { headingImage, desc } = content;
	return (
		<div className="pa3">
			<Image {...headingImage} className="image pb3" />
			<Desc>{desc}</Desc>
		</div>
	);
}
