import React, {useEffect} from "react";
import CN from "classnames";
import {NavLink} from "react-router-dom";

import {useExpanded} from "../../hooks/useExpanded";
import {projectTypes} from "../../projectsProvider";

import "./style.css";

export const ProjectFilters = props => {
	const [expanded, toggleExpanded] = useExpanded("#controls-container .toggle");
	const filterLabel = props.type ? projectTypes[props.type] : "All";
	useEffect(() => {
		window.sessionStorage.setItem("currentType", props.type || "");
	});
	return (
		<>
			<div id="controls-container">
				<div className="toggle" onClick={toggleExpanded}>
					Currently showing: <b>{filterLabel}</b> projects
				</div>
				<div className={CN("wrapper", {expanded})}>
					<section id="controls">
						<ul>
							<li>
								<NavLink exact to="/projects">
									All
								</NavLink>
							</li>
							<li>
								<NavLink to="/archive/ux">UX/UI</NavLink>
							</li>
							<li>
								<NavLink to="/archive/photography">Photography</NavLink>
							</li>
							<li>
								<NavLink to="/archive/wayfinding">Wayfinding</NavLink>
							</li>
							<li>
								<NavLink to="/archive/corporate">Corporate</NavLink>
							</li>
						</ul>
						<ul>
							<li>
								<NavLink to="/archive/poster">Posters</NavLink>
							</li>
							<li>
								<NavLink to="/archive/print">Print</NavLink>
							</li>
							<li>
								<NavLink to="/archive/pack">Packaging</NavLink>
							</li>
							<li>
								<NavLink to="/archive/exhibit">Exhibit</NavLink>
							</li>
							<li>
								<NavLink to="/archive/event">Events</NavLink>
							</li>
						</ul>
					</section>
				</div>
			</div>
			<div id="controls-container-clearfix" />
		</>
	);
};
