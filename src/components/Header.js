import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';

import '../App.css';

import image from '../image.png';

import { Container, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { HeaderData } from './HeaderData';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		position: 'absolute',

		// zIndex: 1,
		bottom: 0,
		// background: 'black',
		background: 'transparent',

		fontFamily: `'Amatic SC', cursive`
	},

	menuButton: {
		marginRight: theme.spacing(2)
	},
	// title: {
	// 	flexGrow: 1,
	// 	color: 'primary'
	// },
	toolBar: {
		color: 'inherit',
		display: 'flex',
		alignItems: 'center'
		// maxHeight: '56px'
	},

	navDisplayFlex: {
		display: `flex`,
		justifyContent: `space-between`,
		marginLeft: 'auto'
	},
	linkText: {
		textDecoration: 'none',
		textTransform: `uppercase`,
		color: `white`,
		fontFamily: `'Amatic SC', cursive`
	},
	image: {
		maxWidth: 70,
		marginRight: '10px'
	},
	title: {
		fontFamily: `'Amatic SC', cursive`
	},
	facebook: {
		color: `white`,
		fontFamily: `'Amatic SC', cursive`,
		fontSize: '50px'
	}
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		// <div >
		<AppBar className={classes.root} position="static">
			<Toolbar className={classes.toolBar}>
				<img className={classes.image} src={image} />
				<Typography color="black" variant="h4" className={classes.title}>
					WELDING WOOD
				</Typography>
				<List className={classes.navDisplayFlex}>
					{HeaderData.map((val, key) => {
						return (
							<ListItem
							//className={classes.navDisplayFlex}
							//id={window.location.pathname === val.path ? 'active' : ''}
							//	key={key}
							//onClick={() => {
							//	window.location.pathname = val.path;
							//	}}
							>
								<Link to={val.path}>
									{/* <ListItemIcon className={classes.linkText} id="icon">
										{val.icon}
									</ListItemIcon> */}

									<ListItemText className={classes.linkText} id="title">
										<Typography variant="h4" className={classes.title}>
											{val.title}
										</Typography>
									</ListItemText>
								</Link>
							</ListItem>
						);
					})}
				</List>
				<a href="https://www.facebook.com/weldingwood/">
					<FacebookIcon className={classes.facebook} />
				</a>
			</Toolbar>
		</AppBar>
		// </div>
	);
}
