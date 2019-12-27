import React from "react";
import CN from "classnames";
export const Par = ({subtitle, classname, image, children}) => (

	<section className="flex justify-center flex-column-l flex-column-t flex-column-m mv4 mh3-m mh4-t mh5-l">
	  <div className="w-25 w-100-m w-100-l w-100-t pb4 pr4 pt15 lh-title">

	    <div className={CN("f27 helvetica fw6 tracked mid-gray tr tl-l tl-t tl-m", classname)}>
	      {subtitle}
		</div>
		<img src={image} className="w-100 ma3-m ma3-t ma3-l"/></div>
	<section className="w-50 w-100-m w-100-l w-100-t f27 minion lh-solid">
	      {children}
	</section>
</section>

);

export const Sec = ({title}) => (

<div className="helvetica f-4 fw9 tracked pb5 lh-title">{title}</div>

);
