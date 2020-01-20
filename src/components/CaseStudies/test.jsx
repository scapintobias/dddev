import React from "react";
import {
	Link
} from "react-router-dom";
import CN from "classnames";
import {
	Title,
	TwoImg,
	ParImg,
	Img,
	Br,
	ProJ,
	More,
	Biblio
} from "./components.jsx";
import Vimeo from '@u-wave/react-vimeo';
import {
	Collapsible
} from "./accordion.jsx";
import {
	Par,
	Sec,
	Reveal
} from "./article.jsx";


export function Test() {
	
	return (
		<main>
			<Reveal button="Typography" title="Typography" text="Typography, even when poorly executed, can never be taken for granted; nor is it ever accidental. Indeed, beauti- fully typeset pages are always the result of long experience. Now and then they even attain the rank of great artistic achievement. But the art of typesetting stands apart from ex- pressive artwork, because the appeal is not limited to a small circle. It is open to everyone's critical judgment, and nowhere does this judgment carry more weight. Typography that can- not be read by everybody is useless. Even for someone who constantly ponders matters of readability and legibility, it is difficult to determine whether something can be read with ease, but the average reader will rebel at once when the type is too small or otherwise irritates the eye; both are signs of a certain illegibility already.

All typography consists of letters. These appear either in the form of a smoothly running sentence or as an assembly of lines, which may even have contrasting shapes. Good typog- raphy begins, and this is no minor matter, with the typeset- ting of a single line of text in a book or a newspaper. Using exactly the same typeface, it is possible to create either a pleasant line, easily read, or an onerous one. Spacing, if it is too wide or too compressed, will spoil almost any typeface." />
<Reveal button="Colors" title="Typography" text="Typography, even when poorly executed, can never be taken for granted; nor is it ever accidental. Indeed, beauti- fully typeset pages are always the result of long experience. Now and then they even attain the rank of great artistic achievement. But the art of typesetting stands apart from ex- pressive artwork, because the appeal is not limited to a small circle. It is open to everyone's critical judgment, and nowhere does this judgment carry more weight. Typography that can- not be read by everybody is useless. Even for someone who constantly ponders matters of readability and legibility, it is difficult to determine whether something can be read with ease, but the average reader will rebel at once when the type is too small or otherwise irritates the eye; both are signs of a certain illegibility already.

All typography consists of letters. These appear either in the form of a smoothly running sentence or as an assembly of lines, which may even have contrasting shapes. Good typog- raphy begins, and this is no minor matter, with the typeset- ting of a single line of text in a book or a newspaper. Using exactly the same typeface, it is possible to create either a pleasant line, easily read, or an onerous one. Spacing, if it is too wide or too compressed, will spoil almost any typeface." />
		</main>
	);
}



