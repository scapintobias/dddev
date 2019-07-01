import React from 'react';

import {ArrowUp, ArrowDown} from '../../icons';

import './style.css';

export const Homepage = props => (
  <main>
    <section className="message" id="top">
      <div id="titolo">
        <p id="uno">Welcome to</p>
        <p id="mark">DisciplineDesign</p>
      </div>
    </section>
    <div className="down">
      <a href="#hero">
        <ArrowDown />
      </a>
    </div>

    <header className="hero" id="hero">
      <div className="hero-inner">
        <h1 className="animate-normal">Hero Title</h1>
        <h2 className="animate-delay">
          Marley was dead: to begin with. There is no doubt whatever about that.
        </h2>
      </div>
    </header>

    <header className="hero section-a">
      <div className="hero-inner">
        <h1 className="hero-title">Hero Title</h1>
        <h2 className="hero-subtitle">
          Marley was dead: to begin with. There is no doubt whatever about that.
        </h2>
      </div>
    </header>
    <header className="hero section-b">
      <div className="hero-inner">
        <h1 className="hero-title">Hero Title</h1>
        <h2 className="hero-subtitle">
          Marley was dead: to begin with. There is no doubt whatever about that.
        </h2>
      </div>
    </header>
    <header className="hero section-c" id="four">
      <div className="hero-inner">
        <h1 className="hero-title">Hero Title</h1>
        <h2 className="hero-subtitle">
          Marley was dead: to begin with. There is no doubt whatever about that.
        </h2>
      </div>
      <div id="sub">
        <a href="#top">
          <ArrowUp />
        </a>
      </div>
    </header>
  </main>
);
