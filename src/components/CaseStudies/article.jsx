import React from "react";

export const Par = ({title, subtitle, image, children}) => (
	<section className="mauto ma3-m pv3 pv2-m mw9 flex flex-row flex-column-m">

      <div className="helvetica navy ph3 ph0-m f2 f35-t tr tl-l tl-t tl-m w-40 w-30-l w-30-t w-100-m fw6 tracked lh-solid lh-solid-m">{title}
      <div className="minion orange f2 f3-t fw2 i pr3 pb3-l pb3-t pb0-m lh-solid lh-solid-m">{subtitle}</div>
		<img src={image} className="w-100"/></div>



		<div className="minion navy pr3 pr0-m fw5 w-50 w-80-l w-70-t w-100-m abc">
			{children}</div>
	</section>
);

export const ParT = ({title}) => (
<section>
<hr className="w-100 navy pv0 mb2"></hr>
<div className="helvetica navy pl-title pb5 pr3 f-4 fw7 tracked lh-title">{title}</div>
</section>
);
