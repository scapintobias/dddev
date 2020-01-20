import React, { useState } from "react";
import CN from "classnames";
export const Par = ( { className, children } ) => (

	<section className="flex justify-center flex-column-l flex-column-t flex-column-m mv3 mh3-m mh4-t mh5-l">
		<section className={CN( "w-50 w-100-m w-100-l w-100-t f27 minion lh-solid", className )} >
			{children}
		</section>
	</section>

);

export const Sec = ( { title } ) => (

	<div className="silver helvetica f1 fw7 tracked pt4 pb3 lh-title">{title}</div>

);

export const Sub = ( { title } ) => (

	<div className="silver  helvetica f25 fw6  pt4 pb3 lh-title">{title}</div>

);

export const Quote = ( { quote } ) => (

	<div className="navy i minion i f27 lh-solid pl4 bl bw2">{quote}</div>

);

export const Reveal = ( { button, title, text } ) => {
	const [isHidden, setHidden] = useState( true );
	const hiddenDetails = isHidden ? "hidden" : "visible";

	function visibilitySwitch() {
		setHidden( !isHidden );
	}

	return (
		<main>
			<div className="w5">
				<button className="f4 link dim br2 ph3 pv2 ma3 dib white bg-navy" onClick={visibilitySwitch}>
					{button}
				</button>
			</div>
			<div style={{ visibility: hiddenDetails }}>
				<Par>
					<Sec title={title} />
					{text}
				</Par>
			</div>
		</main>
	);
}