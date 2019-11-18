import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "../../tachyons.css";

export const Work = props => (
  <main>
    <div className="grid">
      <div className="flex justify-center pv4 items-center item item-b flex justify-center pv4 items-center hover-white bg-animate hover-bg-green">
        <div className="w-80 tc">
          <p className="b ttu f6 sans-serif">UX</p>
          <h1 className="helvetica b lh-leading mv0 pv3">Metro de Lima</h1>
          <p className="caslon lh-solid f3 i">
            Case Study on a subway wayfinding system
          </p>
        </div>
      </div>

      <div className="flex justify-center pv5 items-center item item-c hover-dark-blue bg-animate hover-bg-light-blue">
        <div className="w-80 tc pv4">
          <p className="b ttu f6 helvetica">Fiction</p>
          <h1 className="helvetica b lh-leading f1 mv0 pt3">
            John Cheever
            <br />
            non fa riflettere
          </h1>
          <p className="pb4 pt3 f4 lh-solid caslon">
            <span className="i">Alessandro Piperno</span> – p. 156
          </p>
          <p className="caslon w-90 center lh-solid f3">
            «La narrativa deve illuminaire, esplodere, ristorare. Non c'è alcuna
            filosofia morale nella narrativa oltre all'eccellenza. L'intensità
            della sensibilità e la rapidità le ho sempre ritenute
            importantissime. La gente cerca sempra la morale perché confonde
            narrative e filosofia»
          </p>
        </div>
      </div>

      <div className="flex justify-center pv4 items-center item item-d">
        <div className="w-80 tc">
          <p className="b ttu f6 helvetica">Idee</p>
          <h1 className="helvetica b lh-leading f3 mv0 pv3">
            Mondadori e Rizzoli nel 2050
          </h1>
          <p className="caslon lh-solid f4">
            <span className="i">Giulia Iannuzzi</span> – p. 151
          </p>
        </div>
      </div>
      <div className="flex justify-center pv4 items-center item item-e">
        <div className="w-80 tc">
          <p className="b ttu f6 helvetica">Idee</p>
          <h1 className="helvetica b lh-leading f3 mv0 pv3">
            Contro
            <br />
            Tondelli
          </h1>
          <p className="caslon lh-solid f4">
            <span className="i">Andrea Gentile</span> – p. 150
          </p>
        </div>
      </div>
      <div className="flex justify-center pv4 items-center item item-f">
        <div className="w-90 tc">
          <p className="b ttu f6 helvetica">Idee</p>
          <h1 className="helvetica b lh-leading f3 mv0 pv3">
            Dopo 70 anni <br />
            non è più tempo
            <br /> di cattocommunisti
          </h1>
          <p className="caslon lh-solid f4">
            <span className="i">Guido Vitiello</span> – p. 154
          </p>
        </div>
      </div>
      <div className="flex justify-center pv4 items-center item item-g">
        <div className="w-80 tc">
          <p className="b ttu f6 helvetica">libri</p>
          <p className="caslon f4 lh-solid pt3 pb2">
            Paul Vacca, <span className="i">Fulmin Tom</span>. Le avventure di
            un ragazzino geniale, supereroe del Sessantotto
          </p>
          <p className="caslon f4 lh-solid pb1">
            <span className="i">Nadia Terranova</span> – p. 158
          </p>
          <p className="caslon f4 lh-solid pt2 pb1">
            Alberto Manguel,{" "}
            <span className="i">Storia naturale della curlosità</span>. Un
            saggio che è una camera delle meraviglie
          </p>
          <p className="caslon f4 lh-solid pb1">
            <span className="i">Antonio Sgobba</span> – p. 158
          </p>
          <p className="caslon f4 lh-solid pt4 pb1">
            Andrea Tarabbia, <span className="i">Il giardino delle mosche</span>
            . Romanzo visionario sulla confessione del mostro di Rostov
          </p>
          <p className="caslon f4 lh-solid pb1">
            <span className="i">Marco Rossari</span> – p. 159
          </p>
        </div>
      </div>
      <div className="flex justify-center pv4 items-center item item-h">
        <div className="w-80 tc">
          <p className="b ttu f6 helvetica">non fiction</p>
          <h1 className="helvetica b lh-leading mv0 pv3">
            Com&#8217;è difficile
            <br />
            riconoscere gli errori
          </h1>
          <p className="caslon lh-solid f4">
            <span className="i">Giorgio Fontana</span> – p. 160
          </p>
        </div>
      </div>
      <div className="flex justify-center pv4 items-center item item-i">
        <div className="w-80 tc">
          <h1 className="f4 ttu helvetica b lh-leading mv0 pb3">
            Lettera da New York
          </h1>
          <p className="caslon lh-solid f4">
            <span className="i">Paul Berman</span> – p. 162
          </p>
        </div>
      </div>
    </div>
  </main>
);
