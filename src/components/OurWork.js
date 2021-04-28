import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Paper from '@material-ui/core/Paper';

import logo from '../assests/profile.jpg';
import cut from '../assests/cut.jpg';
import rustic from '../assests/rustic.jpg';

// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import '../styles.css';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		backgroundColor: 'transparent',
		width: '800px',
		height: '100%',
		justifyContent: 'center',
		backgroundImage: `url(${rustic})`,
		marginTop: '100px'
	},
	head: {
		color: 'black',
		fontFamily: `'Amatic SC', cursive`
	},
	body: {
		textAlign: 'left'
	}
}));

// import React from 'react';

const OurWork = () => {
	const classes = useStyles();

	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Grid
			className={classes.root}
			// className="carous"
			// style={{ height: '300px' }}
			container
			justify="center"
		>
			<Paper className={classes.paper}>
				<Carousel pause="hover" activeIndex={index} onSelect={handleSelect}>
					<Carousel.Item style={{ height: '500px' }}>
						<img
							style={{ height: '500px', width: '400px' }}
							// className="d-block w-50"
							// src={logo}
							src="https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/175051589_1269944123462348_7945567595739562060_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=973b4a&_nc_ohc=avNafiXD_MIAX_rd-Mq&_nc_ht=scontent-iad3-2.xx&oh=5712009d8258ca1c12405f74d758fd1f&oe=60AF19A8"
							alt="First slide"
						/>
						<Carousel.Caption style={{ height: '500px' }}>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item style={{ height: '500px' }}>
						<img
							style={{ height: '500px', width: '400px' }}
							// className="d-block w-50"
							src="https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/91182299_967737303683033_5296047546186072064_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=973b4a&_nc_ohc=3qZFgTmeXeQAX9x5n6_&_nc_ht=scontent-iad3-2.xx&oh=ea4eeaaa06829e59b21a197627f5b8cd&oe=60AEB982"
							alt="Second slide"
						/>

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item style={{ height: '500px' }}>
						<img
							style={{ height: '500px', width: '400px' }}
							// className="d-block w-50"
							src="https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/117592253_1083162705473825_3714542783220697726_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=973b4a&_nc_ohc=MBOUc_x9a4wAX-t-xPt&_nc_oc=AQnR_RnIDu466CiQoI1O9C_sBmVy65BgSjvDydmQzFiDktWWJ8FC_7KzuddpAjCiYHQ&_nc_ht=scontent-iad3-2.xx&oh=cac96f7999601892a339c03d7578cd33&oe=60ADA157"
							alt="Third slide"
						/>

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Paper>
		</Grid>
	);
};
export default OurWork;
