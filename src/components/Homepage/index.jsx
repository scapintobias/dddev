import React from 'react';
import { Link } from 'react-router-dom';
import TextLoop from 'react-text-loop';
import { Footer } from '../footer.jsx';
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
      <span>Thailand</span>
    </TextLoop></span>
);

export const Homepage = props => (
  <main>
    <section className="pt2 pb5 pl3 pr3 pl2-m pr2-m">
      <div className="helvetica navy lh-title tracked-tight f-7 f-45-m fw6">
        <span className="orange">Product</span> &{' '}
        <span className="orange">Interaction</span> Designer {' '}<RandomCity />.
      </div>
      <p className="pt7 pt6-m minion navy f-6 f2-m lh-title-s">
        My name is{' '}
        <b className="helvetica tracked-tight f-5 f25-m tracked-tight-m orange">Tobias</b>
        . I design useful and enjoyable experiences with a love for research,
        powerful typography and elegant design. Please feel free to check out my{' '}
        <span className="helvetica fw7 tracked-tight f-5 f25-m tracked-tight-m link navy hover-orange">
          <Link to="/case-studies">case&nbsp;&nbsp;studies</Link>
        </span>
        .
      </p>
      <p className="pt2 pt2-m minion navy f-6 f2-m lh-title-s">
        Whether interested in reading more{' '}
        <b className="helvetica fw7 f-5 f25-m tracked-tight tracked-tight-m link navy hover-silver">
          <a href="/about">about&nbsp;&nbsp;me</a>
        </b>
        , sit back: it gets quite long.
      </p>
    </section>
    <Footer />
  </main>
);
