import React, { useState, useEffect } from 'react';
import Page from '../Page';
import { AiFillGithub } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';

const Projects = () => {
	const [projects, setProjects] = useState([]);

	const handleWorkFilter = (item) => {};

	useEffect(() => {
		const query = '*[_type == "projects"]';
		client.fetch(query).then((data) => setProjects(data));
	}, []);

	return (
		<Page id="projects" styles="bg-offwhite">
			<div className="h-full  text-primary">
				<h2 className="text-8xl font-bold mb-16">PROJECTS</h2>

				<div className="projects-container grid grid-cols-4 gap-4">
					{projects.map((project) => (
						<div className="flex flex-col rounded-md shadow-md pb-4">
							<img
								className="rounded-t-md"
								src={urlFor(project.imgUrl)}
								alt={project.title}
							/>
							<div className="p-4">
								<h3 className="text-lg font-bold uppercase text-center mb-2">
									{project.title}
								</h3>
								<p>{project.description}</p>
							</div>
							<div className="flex justify-center gap-4 text-3xl mt-auto color-primary items-center">
								<a href={project.projectLink} target="_blank" rel="noreferrer">
									<FaGlobe className="text-2xl" />
								</a>
								<a href={project.codeLink}>
									<AiFillGithub />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</Page>
	);
};

export default Projects;
