import React from 'react';
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import './style.css';

export function Collapsible(props) {

	return (
		<Accordion allowZeroExpanded={true} className="mv3 ">
			<AccordionItem>
				<AccordionItemHeading className="helvetica  f4 navy">
					<AccordionItemButton>
						{props.button}
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<div>
						{props.children}
					</div>
				</AccordionItemPanel>
			</AccordionItem>
		</Accordion>
	);
}
