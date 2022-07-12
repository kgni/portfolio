import React, { useState, useEffect } from 'react';
import Page from '../Page';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';

const Projects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const query = '*[_type == "projects"]';
		client.fetch(query).then((data) => setProjects(data));
	}, []);

	return (
		<Page id="projects" styles="bg-offwhite">
			<div className="h-full  text-primary">
				<h2 className="text-8xl font-bold">PROJECTS</h2>

				<div className="projects-container flex">
					{projects.map((project) => (
						<div className="w-96 flex flex-col">
							<h2>{project.title}</h2>
							<p>{project.description}</p>
							<img className="" src={urlFor(project.imgUrl)} alt="" />
						</div>
					))}
				</div>
			</div>
		</Page>
	);
};

export default Projects;
