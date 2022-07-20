import React, { useState, useEffect, Component } from 'react';
import Page from '../Page';
import ProjectModal from '../../components/Modals/ProjectModal';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import Slider from 'react-slick';
import useMediaQuery from '../../hooks/useMediaQuery';

const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [isModalShown, setIsModalShown] = useState(false);
	const [modalData, setModalData] = useState(null);

	const isOneCard = useMediaQuery('(max-width: 1042px)');

	const toggleModal = (id) => {
		const project = projects.find((project) => project._id === id);
		setModalData(project);
		setIsModalShown(true);
	};

	useEffect(() => {
		const query = '*[_type == "projects"]';
		client.fetch(query).then((data) => setProjects(data));
	}, []);

	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, display: 'block' }}
				onClick={onClick}
			/>
		);
	}

	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{
					display: 'block',
				}}
				onClick={onClick}
			/>
		);
	}

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
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
					<h2 className="mb-16 text-8xl font-bold text-primary md:mb-4 md:text-4xl">
						PROJECTS
					</h2>
					{isOneCard ? (
						<>
							<motion.div className="carousel min-w-full">
								<Slider {...settings}>
									{projects.map((project, index) => (
										<motion.div
											// onClick={() => toggleModal(project._id)}
											key={index}
											className="card relative min-w-full shadow-md"
										>
											<img
												className="h-min-full min-w-full "
												src={urlFor(project.imgUrl)}
												alt={project.title}
											/>
											<motion.div
												className="hover absolute top-0 h-full min-w-full bg-black/90"
												initial={{ opacity: 0 }}
												whileHover={{ opacity: [0, 1] }}
												transition={{
													duration: 0.15,
													ease: 'easeInOut',
												}}
											>
												<div className="xs:gap- flex h-full flex-col items-center justify-center gap-24 lg:gap-16 md:gap-12 sm:gap-10 xxs:gap-6">
													<h2 className="text-6xl font-bold  uppercase text-offwhite md:text-5xl xs:text-3xl xxs:text-2xl">
														{project.title}
													</h2>
													<motion.a
														onClick={() => toggleModal(project._id)}
														className="cursor-pointer rounded-full bg-offwhite py-2 px-8 text-2xl font-bold text-primary  duration-200 hover:px-12 hover:ring-1 hover:ring-black md:px-8 md:py-2 md:text-base sm:px-6 sm:hover:px-10 xs:text-sm xs:hover:px-8 xxs:py-1 xxs:hover:px-7"
													>
														SHOW
													</motion.a>
												</div>
											</motion.div>
										</motion.div>
									))}
								</Slider>
							</motion.div>
						</>
					) : (
						<motion.div className="projects-container grid grid-cols-4">
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
										<div className="flex h-full flex-col items-center justify-center gap-6 2xl:gap-3">
											<h2 className="text-2xl font-bold uppercase text-offwhite 2xl:text-lg">
												{project.title}
											</h2>
											<motion.a
												onClick={() => toggleModal(project._id)}
												className="cursor-pointer rounded-full bg-offwhite py-1 px-4 text-sm font-bold  text-primary duration-200 hover:px-6 hover:ring-1 hover:ring-black 2xl:text-xs"
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
