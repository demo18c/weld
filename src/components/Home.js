import { Typography } from '@material-ui/core';
import React from 'react';
import '../App.css';
import video from '../tree.mp4';

const Home = () => {
	return (
		<div className="bg">
			<video src={video} autoPlay muted loop />
			<div className="text">
				<h2 className="toss">Welding Wood</h2>
			</div>
		</div>
	);
};

export default Home;
