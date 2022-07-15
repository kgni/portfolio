import React, { useState, useEffect } from 'react';
import Page from '../Page';
import ProjectModal from '../../components/Modals/ProjectModal';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';

const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [isModalShown, setIsModalShown] = useState(false);
	const [modalData, setModalData] = useState(null);

	const toggleModal = (id) => {
		const project = projects.find((project) => project._id === id);
		setModalData(project);
		setIsModalShown(true);
	};

	useEffect(() => {
		const query = '*[_type == "projects"]';
		client.fetch(query).then((data) => setProjects(data));
	}, []);

	return (
		<>
			{isModalShown && (
				<ProjectModal
					project={modalData}
					setProject={setModalData}
					isModalShown={isModalShown}
					setIsModalShown={setIsModalShown}
				/>
			)}

			<Page id="projects" styles="bg-offwhite">
				<div className="h-full  text-primary">
					<h2 className="text-8xl font-bold mb-16">PROJECTS</h2>

					<div className="projects-container grid grid-cols-4">
						{projects.map((project, index) => (
							<div key={index} className="card relative">
								<img src={urlFor(project.imgUrl)} alt={project.title} />
								<motion.div
									className="absolute w-full h-full top-0 bg-black/70"
									initial={{ opacity: 0 }}
									whileHover={{ opacity: [0, 1] }}
									transition={{
										duration: 0.15,
										ease: 'easeInOut',
										staggerChildren: 0.5,
									}}
								>
									<div className="flex flex-col justify-center items-center h-full gap-4">
										<h2 className="text-offwhite font-bold text-lg uppercase">
											{project.title}
										</h2>
										<motion.a
											onClick={() => toggleModal(project._id)}
											className="text-primary text-sm bg-offwhite rounded-full font-bold py-1 px-4  hover:px-6 duration-200 hover:ring-1 hover:ring-black cursor-pointer"
										>
											SHOW
										</motion.a>
									</div>
								</motion.div>
							</div>
						))}
					</div>
				</div>
			</Page>
		</>
	);
};

export default Projects;
