import React from "react";

export const Desc = ( { children } ) => (
	<section className="flex justify-center flex-column-l flex-column-t flex-column-m mv3 mh3-m mh4-t mh5-l">
		<section className="w-50 w-100-m w-100-l w-100-t f27 minion lh-solid">
			{children}
		</section>
	</section>
);
