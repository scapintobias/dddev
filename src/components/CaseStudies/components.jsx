import React from 'react';

export const Raster = ( { children } ) => (
  <div className="mw68 w-100-m w-90-l ml2-m pb5 min-vh-100 mauto">
    <article className="sans-serif flex flex-column dark-gray center">
      {children}
    </article>
  </div>
);

export const Date = ( { place, time } ) => (
  <section className="w5 helvetica flex flex-column mb4 mb1-m pt3 pt2-m">
    <div className="fw6 f5 lh-solid">
      <p>{place}</p>
      <time className="ttu silver">{time}</time>
    </div>
  </section>
);

export const Title = ( { title, subtitle, description, line2 } ) => (
  <header className="helvetica lh-solid bb bw4 mw68 mauto b--dark-blue flex flex-column mb5 mr3">
    <p className=" f-6 f-5-m  fw7 tracked-tight dark-blue pb2-m pb6">{title}</p>
    <p className="fw6 f1 green pb3 pb2-m fw6-m f2-m tracked">{subtitle}</p>
    <p className="f2 minion fw5 fw6-m f25-m mb0 w-70 w-100-m light-red pb4 pb4-m lh-solid">{description}</p>
    <p className="f2 minion fw5 fw6-m f25-m mb0 w-70 w-100-m light-red pb2 pb2-m lh-solid">{line2}</p>
  </header>
);

export const Body = ( { body } ) => (
  <section className="mw68 w-100-m w-90-l mauto">
    <p className="minion fw5 abc pr3">{body}</p></section>
);