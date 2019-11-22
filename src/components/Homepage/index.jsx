import React from 'react';
import {Link} from 'react-router-dom';
import TextLoop from 'react-text-loop';
import {Footer} from '../footer.jsx';
const RandomCity = () => (
   <span>based in{' '}<br className="dn dib-m dib-ns dib-l"></br>
  <TextLoop interval={700}>
    <span>Germany</span>
    <span>Australia</span>
    <span>UK</span>
    <span>Maldives</span>
    <span>USA</span>
    <span>Italy</span>
    <span>Scotland</span>
    <span>Canada</span>
    <span>Austria</span>
    <span>Bali</span>
    <span>Ireland</span>
  </TextLoop></span>
);

export const Homepage = props => (
  <main>
    <section className="pt2 pl3 pr3 pl2-m pr2-m">
      <div className="helvetica lh-title tracked-tight f-7 f-45-m fw6">
        <span className="orange">Product</span> &{' '}
        <span className="orange">Interaction</span> Designer {' '}<RandomCity />.
      </div>
      <p className="pt7 pt6-m caslon f-6 f2-m lh-title-s">
        My name is{' '}
        <b className="helvetica tracked-tight tracked-tight-m orange">Tobias</b>
        . I design useful and enjoyable experiences with a love for research,
        powerful typography and elegant design. Please feel free to check out my{' '}
        <span className="helvetica fw7 tracked-tight tracked-tight-m link black hover-orange">
          <Link to="/case-studies">case studies</Link>
        </span>
        .
      </p>
      <p className="pt2 pt3-m caslon f-6 f2-m lh-title-s">
        Whether interested in reading more{' '}
        <b className="helvetica fw7 tracked-tight tracked-tight-m link black hover-dark-blue">
          <a href="/about">about me</a>
        </b>
        , sit back: it gets quite long.
      </p>
    </section>
    <Footer />
  </main>
);
