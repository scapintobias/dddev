import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import './audio.css';

export const Player = ({ source }) => (
	<AudioPlayer
		src={source}
		onPlay={(e) => console.log('onPlay')}
		showSkipControls={false}
		showJumpControls={false}
		showLoopControl={false}
		layout="horizontal-reverse"
		className="bb bt b--black-20 helvetica"
	/>
);
