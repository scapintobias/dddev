import React from "react";
import CN from "classnames";
import {NavLink} from "react-router-dom";

import {useExpanded} from "../../hooks/useExpanded";

import "./style.css";

export function Header(props) {
	const [expanded, toggleExpanded] = useExpanded(".header .menu-icon");
	return (
		<>
			<header className={CN("header helvetica", {expanded})}>
				<NavLink to="/" className="logo helvetica">
					DisciplineDesign
				</NavLink>
				<div className="menu-icon" onClick={toggleExpanded}>
					<span className="navicon" />
				</div>
				<ul className="fw5 fw4-m menu">
					<li className="f3-m pt3-m tr pr3-m">
						<NavLink exact to="/case-studies">
							Case Studies
						</NavLink>
					</li>
					<li className="f3-m pt3-m tr pr3-m">
						<NavLink to="/about">About</NavLink>
					</li>
					<li className="f3-m pt3-m tr pr3-m">
						<a
							href="https://www.instagram.com/discipline.design"
							target="_blank"
							rel="noopener noreferrer"
						>
							Photos
						</a>
					</li>
					<li className="pt3-m pb2-m tr pr3-m">
						<a href="mailto:info@discipline.design?subject=Enquiry">
							<span className="helvetica  f3-m f5 fw4 fw5-m">@</span>
						</a>
					</li>
					<li className="pb3-m pt2-m tr pr3-m">
						<a
							href="https://www.linkedin.com/in/scapintobias"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="futurab f4 pb1 f2-m tracked">in</span>
						</a>
					</li>
				</ul>
			</header>
			<div className="header-clearfix" />
		</>
	);
}
