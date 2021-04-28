import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import rustic from '../rustic.jpg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
		// maxWidth="sm"
	},
	head: {
		color: 'black',
		fontFamily: `'Amatic SC', cursive`
	},
	body: {
		textAlign: 'left'
	}
}));

const Contact = () => {
	const classes = useStyles();

	return (
		<Grid>
			<Paper className={classes.paper}>
				<Typography variant="h1" className={classes.head} justifyContent="center">
					Contact Us
				</Typography>
				<p>(555)555-5555</p>
			</Paper>
		</Grid>
	);
};

export default Contact;
