import React from 'react';
import Navbar from '../nav/Navbar';
import Page from '../UI/Page';

const About = () => {
	return (
		<Page id="about" styles="bg-purple">
			<Navbar currentPage="2" page="about" />
		</Page>
	);
};

export default About;
