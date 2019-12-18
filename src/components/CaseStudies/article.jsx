import React from "react";

export const Par = ({title, subtitle, image, children}) => (
	<section className="ma3 pb3 flex flex-row flex-column-m">

      <div className="helvetica navy pr3 f2 f35-t w-third  w-100-m fw6 tracked lh-solid">{title}
      <div className="minion orange f2 f35-t fw2 i pr3 pb3-l pb3-t pb3-m lh-solid">{subtitle}</div>
		<img src={image} className="w-100"/>
      </div>


		<div className="minion navy pr3 fw5 w-two-thirds w-100-m abc">{children}</div>
	</section>
);

export const ParT = ({title}) => (
<div className="ma3 helvetica navy pb3 f1 fw7 tracked lh-title">{title}</div>
);
