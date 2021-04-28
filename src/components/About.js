import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import rustic from '../assests/rustic.jpg';
import profile from '../assests/profile.jpg';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		backgroundColor: 'transparent',
		width: '800px',
		height: '100vh',
		backgroundImage: `url(${rustic})`
	},
	head: {
		color: 'black',
		fontFamily: `'Amatic SC', cursive`
	},
	body: {
		textAlign: 'left'
	}
}));

const About = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container justify="center">
				{/* <Paper justify="center" style={{ backgroundColor: '#966F33', height: '100vh' }}> */}
				<Paper className={classes.paper}>
					<Typography variant="h1" className={classes.head} justifyContent="center">
						About Us
					</Typography>
					<Typography className={classes.body}>
						<p>acacsasscnsckbnsck bsccks</p>
						{/* <p>
							czcjnzkzjciauhdiabckbckzbckbckbcjkccc zzcknzczcmnzckmzc xzc c mz,c mzc z cm cz,x nx
							valcbkabjscjs mzxcnk sczmcmzcmx cm zc
						</p> */}
						<p>
							Morbi dictum justo eros, nec placerat enim elementum at. Vestibulum congue luctus mauris eu
							varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel velit felis.
							Fusce posuere id turpis vel ultrices. Pellentesque aliquet ante libero, ut tempor orci
							vehicula non. Curabitur non tempor mi, id pellentesque erat. Nulla felis libero, commodo nec
							elit et, lacinia semper nisl. Pellentesque vitae lectus quis urna sollicitudin gravida ac
							eget lorem. Sed ipsum leo, vulputate id enim quis, bibendum gravida est. Nam mauris nulla,
							volutpat facilisis posuere quis, tristique eu turpis.
						</p>
						<p>Whether it’s steel or wood, come with an idea and it can be built. </p>
						{/* <p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla dui sapien, nec
							venenatis risus fringilla vitae. Morbi luctus porttitor felis quis ullamcorper. Pellentesque
							ac diam ornare, pellentesque erat in, rhoncus eros. Quisque vitae feugiat tellus. Duis
							lacinia gravida dolor. Cras nec pharetra sapien. Morbi vel sapien suscipit velit aliquam
							accumsan sit amet ut nisi. Duis tristique ex sit amet elit venenatis varius. Donec fringilla
							magna at quam consequat tincidunt. Suspendisse ullamcorper, felis sit amet dictum ornare,
							erat eros elementum mi, ac imperdiet nisl justo eget augue. Nam aliquam sem tortor, vel
							malesuada nisi efficitur quis. Aliquam et arcu aliquam, fermentum ipsum a, dictum est.
						</p> */}
					</Typography>
					<div>
						<img className="profile-pic" src={profile} />
						<p>first name last name</p>
					</div>
				</Paper>
			</Grid>
		</div>
	);
};

export default About;
