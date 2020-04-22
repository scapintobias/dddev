import React from 'react';
import CN from 'classnames';

export const Grid = ({ title, children }) => (
	<article>
		<p className="f-4 silver f1-m helvetica fw8 mv3 mt3-m mb4-m ml3 pl2 pl0-m">
			{title}
		</p>
		<section className="cf ph3 pb3">{children}</section>
	</article>
);

export const Card = (props) => (
	<section className="fl w-25 w-third-ns w-50-l w-50-t w-100-m pa2 pa0-m pb3-m">
		<a href={props.link} target="_blank" rel="noopener noreferrer">
			<div className={CN('bw5 bl', props.class)}>
				<div className="ba">
					<div className="pa3">
						<div className="f2 fw6 tracked helvetica lh-solid h412 h412-m pb4-m">
							{props.title}
						</div>
						<div className="f27 i minion orange lh-solid">{props.author}</div>
					</div>
				</div>
			</div>
		</a>
	</section>
);

export function Resources() {
	return (
		<main>
			<Grid>
				<Card
					class="dim"
					title="About Face"
					author="Alan Cooper"
					link="https://www.amazon.com/About-Face-Essentials-Interaction-Design/dp/1118766571/ref=sr_1_3?crid=3N1YKY35W58PT&keywords=about+face&qid=1583939173&sprefix=about+face%2Caps%2C705&sr=8-3"
				/>
				<Card
					class="dim"
					title="The design of everyday things"
					author="Don Norman"
					link="https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654/ref=sr_1_1?crid=1KAOM18LZ0LQJ&keywords=the+design+of+everyday+things&qid=1583939110&sprefix=the+design+of%2Caps%2C247&sr=8-1"
				/>
				<Card
					class="hover-green"
					title="The Visual Display of Quantitative Information"
					author="Edward Tufte"
					link="https://www.amazon.com/Visual-Display-Quantitative-Information/dp/0961392142/ref=sr_1_1?keywords=The+Visual+Display+of+Quantitative+Information.&qid=1583938945&sr=8-1"
				/>
				<Card
					class="dim"
					title="Bottlenecks: Aligning UX Design with User Psychology"
					author="David C. C. Evans"
					link="https://www.amazon.com/Bottlenecks-Aligning-Design-User-Psychology/dp/1484225791/ref=sr_1_1?crid=3GDHZMKILIDHQ&keywords=bottlenecks+aligning+ux+design+with+user+psychology&qid=1583938395&sprefix=bottlenecks%2Caps%2C745&sr=8-1"
				/>
				<Card
					class="dim"
					link="https://www.amazon.com/Handbook-Usability-Testing-Conduct-Effective/dp/0470185481/ref=sr_1_fkmr0_1?keywords=Handbook+of+Usability+Testing%3A+How+to+Plan%2C+Design%2C+and+Conduct+Effective+Tests%2C+2nd+Edition&qid=1584032290&sr=8-1-fkmr0"
					title="Handbook of Usability Testing"
					author="Rubin, J, Chisnell, D"
				/>
				<Card
					class="dim"
					title="Interaction of color"
					author="Joseph Albers"
					link="https://www.amazon.com/gp/product/0300179359/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0300179359&linkCode=as2&tag=mrmrs01-20&linkId=5d1b4734ee07eaffcbb719bcb1b02d0a"
				/>
				<Card
					class="hover-green"
					title="How to make sense of any mess"
					author="Abby Covert"
					link="https://www.amazon.com/gp/product/1500615994/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1500615994&linkCode=as2&tag=mrmrs01-20&linkId=b323b793cb846f1eb184a1d875b97c08"
				/>
				<Card
					class="hover-orange"
					title="Grid Systems"
					author="Josef Müller-Brockmann"
					link="https://www.amazon.com/gp/product/1500615994/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1500615994&linkCode=as2&tag=mrmrs01-20&linkId=b323b793cb846f1eb184a1d875b97c08"
				/>
				<Card
					class="dim"
					title="The elements of typographic style"
					author="Robert Bringhurst"
					link="https://www.amazon.com/gp/product/0881792128/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0881792128&linkCode=as2&tag=mrmrs01-20&linkId=63b73199f93596b33b271a8e5a530f49"
				/>
				<Card
					class="hover-orange"
					title="Design: Vignelli"
					author="Massimo Vignelli"
					link="https://www.amazon.com/Design-Packaging-Architecture-Interiors-Furniture/dp/0847861848/ref=sr_1_1?keywords=design%3A+vignelli&qid=1583942955&s=books&sr=1-1"
				/>
			</Grid>
			{/* <Grid title="Articles"></Grid>
			<Grid title="Music"></Grid> */}
		</main>
	);
}
