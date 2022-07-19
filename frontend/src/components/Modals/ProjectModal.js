import React from 'react';
import ReactDOM from 'react-dom';
import { urlFor } from '../../client';
import { AiFillGithub, AiOutlineLink, AiOutlineClose } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

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

	return ReactDOM.createPortal(
		<>
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.2 }}
					onClick={() => closeModal()}
					exit={{
						opacity: 0,
						transition: 1,
					}}
					className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-black/90"
				></motion.div>
			</AnimatePresence>
			<motion.div
				// initial={{ x: '100%' }}
				animate={{ y: [-800, -220] }}
				transition={{ duration: 0.3 }}
				exit={{ y: -800, duration: 1 }}
				className="fixed inset-x-0 top-80 z-40 mx-auto w-[700px] rounded-md bg-offwhite  shadow-xl lg:w-3/4"
			>
				<AiOutlineClose
					onClick={() => closeModal()}
					className="absolute -top-7 right-0 h-5 w-5 cursor-pointer text-white"
				/>

				<img src={urlFor(project.imgUrl)} alt="" />
				<div className="px-24 pt-6 pb-12 lg:px-12 xxs:px-4">
					<h3 className="mb-4 text-center text-4xl font-bold uppercase lg:text-2xl xxxs:text-base">
						{project.title}
					</h3>
					<p className="mb-6 text-center lg:text-sm xxxs:text-xs">
						{project.description}
					</p>
					<div className="technologies mb-12">
						<h4 className="mb-4 text-center font-bold uppercase xxxs:text-sm">
							Created With
						</h4>
						<div className="flex justify-center gap-4 ">
							{project.technologies.map((technology) => (
								<>
									<div className="flex flex-col items-center">
										<Tippy
											content={technology.toUpperCase()}
											placement="bottom"
											theme="material"
										>
											<motion.img
												whileHover={{ scale: 1.05 }}
												id={technology}
												className="w-12 cursor-pointer lg:w-10 xxs:w-8"
												// animate={{ opacity: [0, 1] }}
												src={`./technologies/${technology}.png`}
												alt=""
											/>
										</Tippy>
										{/* <p>{technology}</p> */}
									</div>
								</>
							))}
						</div>
					</div>
					<div className="flex items-center justify-center gap-4 text-xl">
						<motion.a
							whileHover={{ scale: 1.05 }}
							className="flex items-center gap-1 rounded px-4 py-1 ring-2 ring-black"
							target="_blank"
							rel="noreferrer"
							href={project.projectLink}
						>
							<AiOutlineLink />
							<p className="text-sm font-semibold">WEB</p>
						</motion.a>
						<motion.a
							whileHover={{ scale: 1.05 }}
							className="flex items-center gap-1 rounded bg-black px-4 py-1 text-offwhite ring-2 ring-black"
							target="_blank"
							rel="noreferrer noopener"
							href={project.codeLink}
						>
							<AiFillGithub />
							<p className="text-sm font-semibold">GITHUB</p>
						</motion.a>
					</div>
				</div>
			</motion.div>
		</>,
		document.getElementById('portal')
	);
};

export default ProjectModal;
