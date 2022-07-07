import React from 'react';
import Page from '../UI/Page';
import Navbar from '../nav/Navbar';

const Home = () => {
	return (
		<Page id="home" styles="bg-beige text-primary">
			<Navbar currentPage="1" page="home" />
		</Page>
	);
};

export default Home;
