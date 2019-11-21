import React from 'react';
import './style.css';

export const Grid = ({children}) => (
  <div className="fill-viewport mw8 mw-100-m mw-100-l pr3 pl3 pl3-l pr3-l pl3-m pr3-m flex-m flex-l flex-column-l flex-column-m mauto pt3">
    {children}
  </div>
);
