import React from 'react';
import { urlFor } from '../../client';
import { AiFillGithub, AiOutlineLink, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const ProjectModal = ({
	isModalShown,
	setIsModalShown,
	project,
	setProject,
}) => {
	console.log(project);

	const closeModal = () => {
		setProject(null);
		setIsModalShown(false);
	};
	if (!isModalShown) return null;

	return (
		<>
			<motion.div
				animate={{ opacity: [0, 1] }}
				transition={{ duration: 0.1 }}
				onClick={() => closeModal()}
				className="fixed top-0 left-0 right-0 bottom-0 bg-black/90 z-30"
			></motion.div>
			<motion.div
				// initial={{ x: '100%' }}
				animate={{ y: [-800, -220] }}
				transition={{ duration: 0.3 }}
				exit={{ y: -800 }}
				className="fixed top-80 shadow-xl inset-x-0 w-[700px] mx-auto z-40  bg-offwhite rounded-md"
			>
				<AiOutlineClose
					onClick={() => closeModal()}
					className="absolute cursor-pointer -top-7 right-0 text-white w-5 h-5"
				/>

				<img src={urlFor(project.imgUrl)} alt="" />
				<div className="px-24 pt-6 pb-12">
					<h3 className="uppercase text-center font-bold text-4xl mb-4">
						{project.title}
					</h3>
					<p className="mb-12 text-center">{project.description}</p>
					<div className="technologies mb-12">
						<h4 className="uppercase font-bold text-center mb-4">
							Created With
						</h4>
						<div className="flex justify-center gap-4 ">
							{project.technologies.map((technology) => (
								<>
									<div className="flex flex-col items-center">
										<motion.img
											className="w-12"
											animate={{ opacity: [0, 1] }}
											src={`./technologies/${technology}.png`}
											alt=""
										/>
										{/* <p>{technology}</p> */}
									</div>
								</>
							))}
						</div>
					</div>
					<div className="flex items-center justify-center gap-4 text-xl">
						<motion.a
							whileHover={{ scale: 1.05 }}
							className="flex items-center gap-1 ring-2 ring-black px-4 py-1 rounded"
							href={project.projectLink}
						>
							<AiOutlineLink />
							<p className="text-sm font-semibold">WEB</p>
						</motion.a>
						<motion.a
							whileHover={{ scale: 1.05 }}
							className="flex items-center gap-1 ring-2 text-offwhite bg-black ring-black px-4 py-1 rounded"
							href={project.codeLink}
						>
							<AiFillGithub />
							<p className="text-sm font-semibold">GITHUB</p>
						</motion.a>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default ProjectModal;
