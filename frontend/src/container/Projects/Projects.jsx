import React, { useState, useEffect } from 'react';
import Page from '../Page';
import { urlFor, client } from '../../client';

const Projects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const query = '*[_type == "projects"]';
		client.fetch(query).then((data) => setProjects(data));
	}, []);

	return (
		<Page id="projects" styles="bg-offwhite">
			<div className="flex items-center">
				{projects.map((project) => (
					<div className="w-96">
						<h2>{project.title}</h2>
						<p>{project.description}</p>
						<img src={urlFor(project.imgUrl)} alt="" />
					</div>
				))}
			</div>
		</Page>
	);
};

export default Projects;
