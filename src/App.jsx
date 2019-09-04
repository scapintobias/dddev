import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import './App.css';

import {Header} from './components/Header';
import {Home, Services, Preview, Contacts, Project, Projects} from './pages';

const ScrollToTop = withRouter(({children, location: {pathname}}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
});

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/projects/:type" exact component={Projects} />
        <Route path="/projects/:type/:year/:slug" component={Project} />
        <Route path="/preview/" component={Preview} />
        <Route path="/services/" component={Services} />
        <Route path="/contacts/" component={Contacts} />
      </ScrollToTop>
    </Router>
  );
}

export default App;
