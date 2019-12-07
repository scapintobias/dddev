		import React from "react";
		import CN from "classnames";
		import {
			NavLink
		} from "react-router-dom";

		import {
			useExpanded
		} from "../../hooks/useExpanded";

		import "./style.css";

		export function Header( props ) {
			const [ expanded, toggleExpanded ] = useExpanded( ".header .menu-icon" );
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
					<li className="f4 pt3-m tr-m tr-l pr3-m">
						<NavLink exact to="/case-studies">
							Case Studies
						</NavLink>
					</li>
					<li className="f4 pt3-m tr-m tr-l pr3-m">
						<NavLink to="/NavLinkbout">About</NavLink>
					</li>

					<li className="pt3-m pb2-m tr-m tr-l pr3-m">
						<a href="mailto:info@discipline.design?subject=Enquiry">
							<span className="helvetica  f3-m f4 fw4 fw5-m">@</span>
						</a>
					</li>
					<li className="f3-m pt2-m tr-m tr-l pr3-m">
						<a href="https://www.instagram.com/discipline.design"
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								x="0px"
								y="0px"
								width="24px"
								height="24px"
								viewBox="0 0 30 30"
								enable-background="new 0 0 30 30"
							>
								<path
									id="instagram"
									fill="#001B44"
									d="M22.107,3.415H7.893c-2.469,0-4.479,2.007-4.479,4.477v4.73v9.486c0,2.469,2.01,4.479,4.479,4.479h14.215
							c2.469,0,4.479-2.01,4.479-4.479v-9.486v-4.73C26.586,5.421,24.576,3.415,22.107,3.415 M23.393,6.086l0.512-0.004v0.511v3.416
							l-3.916,0.014l-0.012-3.928L23.393,6.086z M11.693,12.622c0.742-1.028,1.945-1.7,3.307-1.7s2.564,0.672,3.307,1.7
							c0.484,0.67,0.771,1.49,0.771,2.379c0,2.248-1.828,4.078-4.078,4.078c-2.248,0-4.078-1.83-4.078-4.078
							C10.922,14.112,11.211,13.292,11.693,12.622 M24.328,22.107c0,1.225-0.994,2.219-2.221,2.219H7.893
							c-1.225,0-2.219-0.994-2.219-2.219v-9.486h3.459C8.832,13.356,8.664,14.159,8.664,15c0,3.494,2.842,6.335,6.336,6.335
							s6.336-2.842,6.336-6.335c0-0.842-0.17-1.645-0.467-2.379h3.459V22.107z"
								/>
							</svg>
						</a>
					</li>
					<li className="pb3-m pt3-m tr-m tr-l pr3-m">
						<a href="https://www.linkedin.com/in/scapintobias"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="futurab f3 pb1 f2-m tracked">in</span>
						</a>
					</li>
				</ul>
			</header> <
				div className = "header-clearfix" / >
				<
				/>
			);
		}
