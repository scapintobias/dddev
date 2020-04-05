import React, { useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './tachyons.css';
import './type.css';
import { useRouter } from './hooks/useRouter';
import { Header } from './components/Header';
import { Tab } from './components/Work';

import { Home, Project, Projects, Resources, About } from './pages';

import { Yape, Yapesrl } from './components/CaseStudies/yape';
import { Enovia } from './components/CaseStudies/enovia';
import {Receipts} from './components/CaseStudies/receipts'
function ScrollToTop({ children }) {
  const {
    location: { pathname },
  } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
}

function getTransform({ search }) {
  if (search === '?next') return fromRightTransform;
  if (search === '?prev') return fromLeftTransform;
  return baseTransform;
}

const baseTransform = 'scale3d(0.95,0.95,0.95) translate3d(0,0,0)';
const bounceInTransform = 'scale3d(1,1,1) translate3d(0,0,0)';
const fromRightTransform = 'scale3d(1,1,1) translate3d(50%,0,0)';
const fromLeftTransform = 'scale3d(1,1,1) translate3d(-50%,0,0)';

function PageContent() {
  const { location } = useRouter();
  const transitions = useTransition(location, location => location.pathname, {
    from: item => ({
      opacity: 0,
      transform: getTransform(item),
    }),
    enter: {
      opacity: 1,
      transform: bounceInTransform,
    },
    leave: item => ({
      opacity: 0,
      transform: baseTransform,
      position: 'absolute',
    }),
    config: {
      mass: 1,
      tension: 280,
      friction: 20,
    },
  });

  return transitions.map(({ item, props, key }) => (
    <animated.div className="fill-viewport" key={key} style={props}>
      <Switch location={item}>
        <Route path="/" exact component={Home} />
        <Route path="/archive" exact component={Projects} />
        <Route path="/archive/:type" exact component={Projects} />
        <Route path="/archive/:type/:year/:slug" component={Project} />
        <Route path="/resources" exact component={Resources} />
        <Route path="/about/" component={About} />
        <Route path="/work/" exact component={Tab} />
        <Route path="/work/eNovia" exact component={Enovia} />
        <Route path="/work/yape" exact component={Yape} />
        <Route path="/work/yapesrl" exact component={Yapesrl} />
        <Route path="/work/receipts" exact component={Receipts} />
      </Switch>
    </animated.div>
  ));
}

export default function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <div style={{ overflow: 'hidden' }}>
          <PageContent />
        </div>
      </ScrollToTop>
    </Router>
  );
}
