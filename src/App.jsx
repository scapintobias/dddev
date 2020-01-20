import React, {
	useEffect
} from "react";
import {
	useTransition,
	animated
} from "react-spring";
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";
import "./App.css";
import "./tachyons.css";
import "./type.css";
import {
	useRouter
} from "./hooks/useRouter";
import {
	Header
} from "./components/Header";
import {
	Tab
} from "./components/Work";

import {
	Home,
	Project,
	Projects,
	About,
} from "./pages";

import { Yape, Yapesrl } from "./components/CaseStudies/yape";
import { Enovia } from "./components/CaseStudies/enovia";
import { Venues } from "./components/CaseStudies/musicvenues";
import { Test } from "./components/CaseStudies/test";
function ScrollToTop( {
	children
} ) {
	const {
		location: {
			pathname
		}
	} = useRouter();

	useEffect( () => {
		window.scrollTo( 0, 0 );
	}, [pathname] );

	return children || null;
}

function getTransform( {
	search
} ) {
	if ( search === "?next" ) return fromRightTransform;
	if ( search === "?prev" ) return fromLeftTransform;
	return baseTransform;
}

const baseTransform = "scale3d(0.95,0.95,0.95) translate3d(0,0,0)";
const bounceInTransform = "scale3d(1,1,1) translate3d(0,0,0)";
const fromRightTransform = "scale3d(1,1,1) translate3d(50%,0,0)";
const fromLeftTransform = "scale3d(1,1,1) translate3d(-50%,0,0)";

function PageContent() {
	const {
		location
	} = useRouter();
	const transitions = useTransition( location, location => location.pathname, {
		from: item => ( {
			opacity: 0,
			transform: getTransform( item )
		} ),
		enter: {
			opacity: 1,
			transform: bounceInTransform
		},
		leave: item => ( {
			opacity: 0,
			transform: baseTransform,
			position: "absolute"
		} ),
		config: {
			mass: 1,
			tension: 280,
			friction: 20
		}
	} );

	return transitions.map( ( {
		item,
		props,
		key
	} ) => (
			<animated.div className="fill-viewport" key={key} style={props}>
				<Switch location={item}>
					<Route path="/" exact component={Home} />
					<Route path="/projects" exact component={Projects} />
					<Route path="/projects/:type" exact component={Projects} />
					<Route path="/projects/:type/:year/:slug" component={Project} />
					<Route path="/about/" component={About} />
					<Route path="/work/" exact component={Tab} />
					<Route path="/work/eNovia" exact component={Enovia} />
					<Route path="/work/yape" exact component={Yape} />
					<Route path="/work/musicvenues" exact component={Venues} />
					<Route path="/work/yapesrl" exact component={Yapesrl} />
					<Route path="/work/test" exact component={Test} />
				</Switch>
			</animated.div>
		) );
}

export default function App() {
	return (
		<Router>
			<ScrollToTop>
				<Header />
				<div style={{ overflow: "hidden" }}>
					<PageContent />
				</div>
			</ScrollToTop>
		</Router>
	);
}
