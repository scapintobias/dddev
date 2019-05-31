import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import {Header} from './components/Header';
import {Home, About, Preview, Contacts} from './pages';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/preview/" component={Preview} />
      <Route path="/contacts/" component={Contacts} />
    </Router>
  );
}

export default App;
