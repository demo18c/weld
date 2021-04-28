import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

export const HeaderData = [
	{
		title: 'Home',
		icon: <HomeIcon />,
		path: '/'
	},
	{
		title: 'About Us',
		icon: <InfoIcon />,
		path: '/aboutus'
	},
	{
		title: 'Our Work',
		icon: <HomeIcon />,
		path: '/ourwork'
	},
	{
		title: 'Contact Us',
		icon: <InfoIcon />,
		path: '/contactus'
	}
];
