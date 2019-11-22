import React from 'react';
import {Link} from 'react-router-dom';
import TextLoop from "react-text-loop";

const Random = () => (
  <span>
  based in{' '}
<TextLoop interval={550}>
        <span>Italy</span>
        <span>Germany</span>
        <span>Australia</span>
        <span>United Kingdom</span>
        <span>New Zealand</span>
        <span>United States</span>
        <span>Scotland</span>
        <span>Canada</span>
        <span>Bali</span>
      </TextLoop>.
  </span>
);

export const Homepage = props => (
  <main>
    <section className="pt2 pl3 pr3 pl2-m pr1-m">
      <p className="helvetica lh-title tracked-tight f-7 f-45-m fw6">
        <span className="orange">Product</span> &{' '}
        <span className="orange">Interaction</span> Designer <Random />
      </p>
      <p className="pt7 pt6-m caslon f-6 f2-m lh-title-s">
        My name is{' '}
        <b className="helvetica tracked-tight tracked-tight-m orange">Tobias</b>
        . I design useful and enjoyable experiences with a love for research,
        powerful typography and elegant design. Please feel free to check out my{' '}
        <span className="helvetica fw7 tracked-tight tracked-tight-m link black hover-orange">
          <Link to="/case-studies">case studies</Link>
        </span>
        . Whether interested in reading more{' '}
        <b className="helvetica fw7 tracked-tight tracked-tight-m link black hover-dark-blue">
          <a href="/about">about me</a>
        </b>
        , sit back: it could get quite long.
      </p>
    </section>
  </main>
);
