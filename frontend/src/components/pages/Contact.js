import React from 'react';
import Navbar from '../nav/Navbar';
import Page from '../UI/Page';

const Contact = () => {
	return (
		<Page id="contact" styles="bg-light-green">
			<Navbar currentPage="4" page="contact" />
		</Page>
	);
};

export default Contact;
