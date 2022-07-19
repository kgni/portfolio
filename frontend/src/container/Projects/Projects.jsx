import React, { useState, useEffect } from 'react';
import Page from '../Page';
import ProjectModal from '../../components/Modals/ProjectModal';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import useMediaQuery from '../../hooks/useMediaQuery';
import { FaSlideshare } from 'react-icons/fa';

const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [isModalShown, setIsModalShown] = useState(false);
	const [modalData, setModalData] = useState(null);

	const isOneCard = useMediaQuery('(max-width: 1042px)');

	const [position, setPosition] = useState(0);

	const toggleModal = (id) => {
		const project = projects.find((project) => project._id === id);
		setModalData(project);
		setIsModalShown(true);
	};

	useEffect(() => {
		const query = '*[_type == "projects"]';
		client.fetch(query).then((data) => setProjects(data));
	}, []);

	const onRight = () => {
		if (position < projects.length - 1) {
			setPosition(position + 1);
		}
	};

	const onLeft = () => {
		if (position > 0) {
			setPosition(position - 1);
		}
	};

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
					<h2 className="text-8xl font-bold text-primary md:mb-4 md:text-4xl">
						PROJECTS
					</h2>
					{isOneCard ? (
						<>
							<button onClick={onRight}>RIGHT</button>
							<button onClick={onLeft}>LEFT</button>
							<motion.div className="carousel cursor-grab">
								<motion.div
									drag="x"
									dragConstraints={{ right: 0 }}
									animate={{
										left: `${position * 60 - 30}vw`,
									}}
									className="inner-carousel flex h-full w-full gap-44 "
								>
									{projects.map((project, index) => (
										<motion.div
											// onClick={() => toggleModal(project._id)}
											key={index}
											className="card relative min-w-full shadow-md"
										>
											<img
												className="w-min-full h-full"
												src={urlFor(project.imgUrl)}
												alt={project.title}
											/>
											<motion.div
												className="hover absolute top-0 h-full w-full bg-black/70"
												initial={{ opacity: 0 }}
												whileHover={{ opacity: [0, 1] }}
												transition={{
													duration: 0.15,
													ease: 'easeInOut',
												}}
											>
												<div className="flex h-full flex-col items-center justify-center gap-24">
													<h2 className="text-6xl font-bold uppercase text-offwhite">
														{project.title}
													</h2>
													<motion.a
														onClick={() => toggleModal(project._id)}
														className="cursor-pointer rounded-full bg-offwhite py-2 px-8 text-2xl font-bold  text-primary duration-200 hover:px-12 hover:ring-1 hover:ring-black"
													>
														SHOW
													</motion.a>
												</div>
											</motion.div>
										</motion.div>
									))}
								</motion.div>
							</motion.div>
						</>
					) : (
						<motion.div className="projects-container grid grid-cols-4 xl:grid-cols-2 xl:gap-2 lg:grid-cols-1">
							{projects.map((project, index) => (
								<motion.div key={index} className="card relative xl:shadow-md">
									<img src={urlFor(project.imgUrl)} alt={project.title} />
									<motion.div
										className="absolute top-0 h-full w-full bg-black/70"
										initial={{ opacity: 0 }}
										whileHover={{ opacity: [0, 1] }}
										transition={{
											duration: 0.15,
											ease: 'easeInOut',
										}}
									>
										<div className="flex h-full flex-col items-center justify-center gap-4 xl:gap-8">
											<h2 className="text-lg font-bold uppercase text-offwhite xl:text-3xl">
												{project.title}
											</h2>
											<motion.a
												onClick={() => toggleModal(project._id)}
												className="cursor-pointer rounded-full bg-offwhite py-1 px-4 text-sm font-bold  text-primary duration-200 hover:px-6 hover:ring-1 hover:ring-black"
											>
												SHOW
											</motion.a>
										</div>
									</motion.div>
								</motion.div>
							))}
						</motion.div>
					)}
				</div>
			</Page>
		</>
	);
};

export default Projects;
