import React from 'react';
import Navbar from '../nav/Navbar';
import Page from '../UI/Page';

const Projects = () => {
	return (
		<Page id="projects" styles="bg-offwhite">
			<Navbar currentPage="3" page="projects" />
		</Page>
	);
};

export default Projects;
