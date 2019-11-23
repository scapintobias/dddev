import React from 'react';
import { Link } from 'react-router-dom';
import CN from 'classnames';

export const Cell = ( { link, title, subtitle, description, className } ) => (
  <Link to={link}>
    <div className={CN( 'flex justify-center navy', className )}>
      <div className="w-90 tc">
        <p className="b f6 pb3 helvetica">{title}</p>
        <h1 className="helvetica tracked f2 b lh-leading pb3">{subtitle}</h1>
        <p className="pb1 pt5 f3 i minion">{description}</p>
      </div>
    </div>
  </Link>
);
export const CellF = ( { link, title, subtitle, description, className } ) => (
  <Link to={link}>
    <div className={CN( 'flex justify-center navy', className )}>
      <div className="w-90 tc">
        <p className="b f6 pb3 futura">{title}</p>
        <h1 className="futurab tracked f2 lh-leading pb3">{subtitle}</h1>
        <p className="pb1 pt5 f3 i minion">{description}</p>
      </div>
    </div>
  </Link>
);
export const CellText = ( {
  link,
  title,
  subtitle,
  description,
  text,
  className,
} ) => (
    <Link to={link}>
      <div className={CN( 'flex justify-center navy', className )}>
        <div className="w-90 tc">
          <p className="b f6 pb3 helvetica">{title}</p>
          <h1 className="helvetica tracked f2 b lh-leading pb3">{subtitle}</h1>
          <p className="pb1 pt3 f3 i minion">{description}</p>
          <p className="minion pt5 w-80 center lh-solid f3">{text}</p>
        </div>
      </div>
    </Link>
  );
