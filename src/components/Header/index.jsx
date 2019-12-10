import React from "react";
import CN from "classnames";
import {NavLink} from "react-router-dom";

import {useExpanded} from "../../hooks/useExpanded";

import "./style.css";

export function Header(props) {
	const [expanded, toggleExpanded,] = useExpanded(".header .menu-icon");
	return (<> < header className = {
		CN("header helvetica", {expanded})
	} > <NavLink to="/" className="logo helvetica">
		DisciplineDesign
	</NavLink>
	<div className="menu-icon" onClick={toggleExpanded}>
		<span className="navicon"/>
	</div>
	<ul className="fw5 menu">
		<li className="f4 pt3-m tr-m tr-l pr35-m pt3-l pr35-l">
			<NavLink exact to="/case-studies">
				Case Studies
			</NavLink>
		</li>
		<li className="f4 pt3-m tr-m tr-l pr35-m pt3-l pr35-l">
			<NavLink exact to="/about">About</NavLink>
		</li>

		<li className="pt3-m pb2-m tr-m tr-l pr35-m pt3-m pr3-m pt3-l pr35-l">
			<a href="mailto:info@discipline.design?subject=Enquiry">
				<span className="helvetica f4">@</span>
			</a>
		</li>
		<li className="f3-m pt2-m tr-m tr-l pr35-m mt05 pt3-l pr35-l">
			<a id="insta" href="https://www.instagram.com/discipline.design" target="_blank" rel="noopener noreferrer">
				<svg
					x="0px"
					y="0px"
					width="19px"
					height="19px"
					viewBox="0 0 20 20"
					enableBackground="new 0 0 20 20"
					bottom="4"
					>
					<path
						id="instagram"
						fill="#001B44"
						d="M14,0H6C2.7,0,0,2.7,0,6V14c0,3.3,2.7,6,6,6H14c3.3,0,6-2.7,6-6V6C20,2.7,17.3,0,14,0z M18,14c0,2.2-1.8,3.9-3.9,3.9H6
		C3.8,18,2,16.2,2,14V6C2,3.8,3.8,2,6,2H14C16.2,2,18,3.8,18,6V14L18,14z"/><path
		id="instagram"
		fill="#001B44"
		d="M10,4.8c-2.9,0-5.2,2.3-5.2,5.2s2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2S12.9,4.8,10,4.8z M10,13.2c-1.7,0-3.2-1.4-3.2-3.2
		S8.3,6.8,10,6.8c1.7,0,3.2,1.4,3.2,3.2C13.2,11.7,11.7,13.2,10,13.2z"/>
	<circle
		id="instagram"
		fill="#001B44"
		 cx="15.2" cy="4.9" r="1.2"/>
				</svg>
			</a>
		</li>
		<li className="pb3-m pb3-l pt3-m tr-m tr-l pr35-m pt3-l pr35-l">
			<a href="https://www.linkedin.com/in/scapintobias" target="_blank" rel="noopener noreferrer">
				<span className="futurab f3 pb1 tracked">in</span>
			</a>
		</li>
	</ul> < /header> < div className = "header-clearfix" / > < />
			);
		}
