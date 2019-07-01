import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import {Header} from './components/Header';
import {Home, Services, Preview, Contacts, Project, Projects} from './pages';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/projects/:type" exact component={Projects} />
      <Route path="/projects/:type/:year/:slug" component={Project} />
      <Route path="/preview/" component={Preview} />
      <Route path="/services/" component={Services} />
      <Route path="/contacts/" component={Contacts} />
    </Router>
  );
}

export default App;
