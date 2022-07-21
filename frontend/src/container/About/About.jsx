import React from 'react';
import Page from '../Page';
import { images } from '../../constants';
import ParticlesAbout from '../../components/ParticlesAbout';
import { motion } from 'framer-motion';
import Flag from 'react-world-flags';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import useMediaQuery from '../../hooks/useMediaQuery';
// TODO: Make astronaut image float more randomly with framer motion, right now it is just floating diagonally
const About = () => {
	const isMobile = useMediaQuery('(max-width: 840px)');
	const isSmallMobile = useMediaQuery('(max-width: 420px)');

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	return (
		<>
			{!isSmallMobile && <ParticlesAbout />}
			<Page id="about" styles={`${isSmallMobile && 'bg-primary'}`}>
				{isMobile ? (
					<>
						<h2 className="mb-16 text-8xl font-bold text-offwhite md:mb-4 md:text-4xl">
							ABOUT
						</h2>
						<div className="profile-card w-full rounded-lg bg-[#FFFAFA] p-8">
							<div className="flex w-full justify-center">
								<motion.img
									className="mb-8 flex w-36 cursor-pointer rounded-full shadow-md"
									src={images.pbImage}
									alt="headshot"
								/>
							</div>
							<h3 className="mb-6 text-center text-4xl font-semibold">
								Hi, I'm Karl!
							</h3>
							<p className="mb-2">
								Software developer from Denmark{' '}
								<Flag className="inline w-4" code={'DK'} />, currently living in
								Spain <Flag className="inline w-4" code={'ES'} />.
							</p>
							<p className="mb-2 xs:hidden">
								Creative, detail-oriented, and always ready to learn new skills
								and further my growth and development.
							</p>
							<p className="mb-4">
								Feel free to check out my{' '}
								<a
									className="text-xl font-bold underline"
									href="https://docs.google.com/document/d/1exdVLZLkl-n1u9k7C-QoMhjcb2b1MRXT/edit?usp=sharing&ouid=106838936484591987660&rtpof=true&sd=true"
									target="_blank"
									rel="noreferrer noopener"
								>
									resume
								</a>
								, or scroll to the next page for my projects!
							</p>
							<div className="skills">
								<h3 className="mb-1 text-xl font-bold uppercase sm:hidden">
									Skills
								</h3>
								<motion.div
									initial={{ width: '0%' }}
									whileInView={{ width: '100%' }}
									transition={{ bounce: 0, type: 'spring', duration: 1.2 }}
									viewport={{ once: true }}
									className="mx-auto mb-4 h-0.5 bg-primary sm:w-20"
								></motion.div>

								{isSmallMobile ? (
									<>
										<motion.div
											variants={container}
											viewport={{ once: true }}
											initial="hidden"
											whileInView="show"
											className="mb-4 flex items-center justify-center gap-8"
										>
											{/* HTML */}
											<Tippy content="HTML" placement="bottom" theme="material">
												<motion.img
													variants={item}
													whileHover={{ scale: 1.05 }}
													src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
													alt="HTML5"
												/>
											</Tippy>

											{/* CSS */}
											<Tippy content="CSS" placement="bottom" theme="material">
												<motion.img
													variants={item}
													whileHover={{ scale: 1.05 }}
													src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
													alt="CSS3"
												/>
											</Tippy>

											{/* JavaScript */}
											<Tippy
												variants={item}
												content="JavaScript"
												placement="bottom"
												theme="material"
											>
												<motion.img
													variants={item}
													whileHover={{ scale: 1.05 }}
													src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
													alt="JavaScript"
												/>
											</Tippy>

											{/* TypeScript */}

											{/* React */}
											<Tippy
												content="React"
												placement="bottom"
												theme="material"
											>
												<motion.img
													variants={item}
													whileHover={{ scale: 1.05 }}
													src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
													alt="React"
												/>
											</Tippy>
										</motion.div>
										<motion.div
											variants={container}
											viewport={{ once: true }}
											initial="hidden"
											whileInView="show"
											className="mb-2 flex items-center justify-center gap-8"
										>
											{/* Sass */}
											<Tippy content="Sass" placement="bottom" theme="material">
												<motion.img
													variants={item}
													whileHover={{ scale: 1.05 }}
													src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
													alt="Sass"
												/>
											</Tippy>
											{/* Tailwind */}

											<Tippy
												content="TailwindCSS"
												placement="bottom"
												theme="material"
											>
												<motion.i
													variants={item}
													whileHover={{ scale: 1.05 }}
													class="devicon-tailwindcss-plain colored"
												></motion.i>
											</Tippy>

											{/* Node.js */}

											<Tippy
												content="Node.js"
												placement="bottom"
												theme="material"
											>
												<motion.img
													variants={item}
													whileHover={{ scale: 1.05 }}
													src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
													alt="Nodejs"
												/>
											</Tippy>

											{/* MONGO */}
											<Tippy
												content="MongoDB"
												placement="bottom"
												theme="material"
											>
												<motion.img
													variants={item}
													whileHover={{ scale: 1.05 }}
													src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
													alt="Mongo DB"
												/>
											</Tippy>
										</motion.div>
										<motion.div
											variants={container}
											viewport={{ once: true }}
											initial="hidden"
											whileInView="show"
											className="flex items-center justify-center gap-8"
										>
											{/* EXPRESS */}

											<Tippy
												content="Express"
												placement="bottom"
												theme="material"
											>
												<motion.i
													variants={item}
													whileHover={{ scale: 1.05 }}
													class="devicon-express-original"
												></motion.i>
											</Tippy>

											{/* Next.js */}
											<Tippy
												content="Next.js"
												placement="bottom"
												theme="material"
											>
												<motion.i
													variants={item}
													whileHover={{ scale: 1.05 }}
													class="devicon-nextjs-original-wordmark nextjs"
												></motion.i>
											</Tippy>

											{/* GraphQL */}

											{/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" /> */}
											<Tippy
												content="GraphQL"
												placement="bottom"
												theme="material"
											>
												<motion.img
													variants={item}
													whileHover={{ scale: 1.05 }}
													src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
													alt="GraphQL"
												/>
											</Tippy>

											{/* JEST */}
											<Tippy content="Jest" placement="bottom" theme="material">
												<motion.img
													variants={item}
													whileHover={{ scale: 1.05 }}
													src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
													alt="Jest"
												/>
											</Tippy>
										</motion.div>
									</>
								) : (
									<>
										<motion.div
											variants={container}
											viewport={{ once: true }}
											initial="hidden"
											whileInView="show"
											className="mb-2 flex items-center justify-between sm:justify-center sm:gap-8 xs:justify-between xs:gap-0"
										>
											{/* HTML */}
											<Tippy content="HTML" placement="bottom" theme="material">
												<motion.img
													variants={item}
													whileHover={{ scale: 1.05 }}
													src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
													alt="HTML5"
												/>
											</Tippy>

											{/* CSS */}
											<Tippy content="CSS" placement="bottom" theme="material">
												<motion.img
													variants={item}
													whileHover={{ scale: 1.05 }}
													src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
													alt="CSS3"
												/>
											</Tippy>

											{/* JavaScript */}
											<Tippy
												content="JavaScript"
												placement="bottom"
												theme="material"
											>
												<motion.img
													variants={item}
													whileHover={{ scale: 1.05 }}
													src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
													alt="JavaScript"
												/>
											</Tippy>

											{/* TypeScript */}

											{/* React */}
											<Tippy
												content="React"
												placement="bottom"
												theme="material"
											>
												<motion.img
													variants={item}
													whileHover={{ scale: 1.05 }}
													src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
													alt="React"
												/>
											</Tippy>

											{/* Sass */}
											<Tippy content="Sass" placement="bottom" theme="material">
												<motion.img
													variants={item}
													whileHover={{ scale: 1.05 }}
													src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
													alt="Sass"
												/>
											</Tippy>
											{/* Tailwind */}

											<Tippy
												content="TailwindCSS"
												placement="bottom"
												theme="material"
											>
												<motion.i
													variants={item}
													whileHover={{ scale: 1.05 }}
													class="devicon-tailwindcss-plain colored"
												></motion.i>
											</Tippy>
										</motion.div>
										<motion.div
											variants={container}
											viewport={{ once: true }}
											initial="hidden"
											whileInView="show"
											className="flex items-center justify-between sm:justify-center sm:gap-8 xs:justify-between xs:gap-0"
										>
											{/* Node.js */}

											<Tippy
												content="Node.js"
												placement="bottom"
												theme="material"
											>
												<motion.img
													variants={item}
													whileHover={{ scale: 1.05 }}
													src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
													alt="Nodejs"
												/>
											</Tippy>

											{/* MONGO */}
											<Tippy
												content="MongoDB"
												placement="bottom"
												theme="material"
											>
												<motion.img
													variants={item}
													whileHover={{ scale: 1.05 }}
													src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
													alt="Mongo DB"
												/>
											</Tippy>

											{/* EXPRESS */}

											<Tippy
												content="Express"
												placement="bottom"
												theme="material"
											>
												<motion.i
													variants={item}
													whileHover={{ scale: 1.05 }}
													class="devicon-express-original"
												></motion.i>
											</Tippy>

											{/* Next.js */}
											<Tippy
												content="Next.js"
												placement="bottom"
												theme="material"
											>
												<motion.i
													variants={item}
													whileHover={{ scale: 1.05 }}
													class="devicon-nextjs-original-wordmark nextjs"
												></motion.i>
											</Tippy>

											{/* GraphQL */}

											{/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" /> */}
											<Tippy
												content="GraphQL"
												placement="bottom"
												theme="material"
											>
												<motion.img
													variants={item}
													whileHover={{ scale: 1.05 }}
													src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
													alt="GraphQL"
												/>
											</Tippy>

											{/* JEST */}
											<Tippy content="Jest" placement="bottom" theme="material">
												<motion.img
													variants={item}
													whileHover={{ scale: 1.05 }}
													src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
													alt="Jest"
												/>
											</Tippy>
										</motion.div>
									</>
								)}
							</div>
						</div>
					</>
				) : (
					<>
						<div className="about-content flex items-center">
							<div className="text-container w-6/12">
								<div className="mb-16 flex items-center gap-8">
									<h2 className="text-8xl font-bold text-offwhite ">ABOUT</h2>
									<motion.img
										className="w-24 cursor-pointer rounded-full"
										src={images.pbImage}
										alt="headshot"
									/>
								</div>
								<div className="flex h-full flex-col text-offwhite">
									<div className="w-full text-xl leading-8">
										<div className="mb-14">
											<h3 className="mb-6 text-4xl font-semibold">
												Hi, I'm Karl!
											</h3>
											<p className="mb-2">
												Software developer from Denmark{' '}
												<Flag className="inline w-4" code={'DK'} />, currently
												living in Spain{' '}
												<Flag className="inline w-4" code={'ES'} />.
											</p>
											<p className="mb-2">
												Creative, detail-oriented, and always ready to learn new
												skills and further my growth and development.
											</p>
											<p>
												Feel free to check out my{' '}
												<a
													className="text-3xl font-bold underline"
													href="https://docs.google.com/document/d/1exdVLZLkl-n1u9k7C-QoMhjcb2b1MRXT/edit?usp=sharing&ouid=106838936484591987660&rtpof=true&sd=true"
													target="_blank"
													rel="noreferrer noopener"
												>
													resume
												</a>
												, or scroll to the next page for my projects!
											</p>
										</div>
										<div className="skills">
											<h3 className="mb-1 text-xl font-bold uppercase">
												Skills
											</h3>
											<motion.div
												transition={{ duration: 1.6 }}
												initial={{ width: '0%' }}
												whileInView={{ width: '100%' }}
												viewport={{ once: true }}
												className="mb-4 h-1 w-full bg-offwhite"
											></motion.div>
											<motion.div
												variants={container}
												viewport={{ once: true }}
												initial="hidden"
												whileInView="show"
												className="mb-4 flex items-center justify-between"
											>
												{/* HTML */}
												<Tippy
													content="HTML"
													placement="bottom"
													theme="material"
												>
													<motion.img
														variants={item}
														whileHover={{ scale: 1.05 }}
														src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
														alt="HTML5"
													/>
												</Tippy>

												{/* CSS */}
												<Tippy
													content="CSS"
													placement="bottom"
													theme="material"
												>
													<motion.img
														variants={item}
														whileHover={{ scale: 1.05 }}
														src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
														alt="CSS3"
													/>
												</Tippy>

												{/* JavaScript */}
												<Tippy
													content="JavaScript"
													placement="bottom"
													theme="material"
												>
													<motion.img
														variants={item}
														whileHover={{ scale: 1.05 }}
														src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
														alt="JavaScript"
													/>
												</Tippy>

												{/* TypeScript */}

												{/* React */}
												<Tippy
													content="React"
													placement="bottom"
													theme="material"
												>
													<motion.img
														variants={item}
														whileHover={{ scale: 1.05 }}
														src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
														alt="React"
													/>
												</Tippy>

												{/* Sass */}
												<Tippy
													content="Sass"
													placement="bottom"
													theme="material"
												>
													<motion.img
														variants={item}
														whileHover={{ scale: 1.05 }}
														src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
														alt="Sass"
													/>
												</Tippy>
												{/* Tailwind */}

												<Tippy
													content="TailwindCSS"
													placement="bottom"
													theme="material"
												>
													<motion.i
														variants={item}
														whileHover={{ scale: 1.05 }}
														class="devicon-tailwindcss-plain colored"
													></motion.i>
												</Tippy>
											</motion.div>
											<motion.div
												variants={container}
												viewport={{ once: true }}
												initial="hidden"
												whileInView="show"
												className="flex items-center justify-between "
											>
												{/* Node.js */}

												<Tippy
													content="Node.js"
													placement="bottom"
													theme="material"
												>
													<motion.img
														variants={item}
														whileHover={{ scale: 1.05 }}
														src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
														alt="Nodejs"
													/>
												</Tippy>

												{/* MONGO */}
												<Tippy
													content="MongoDB"
													placement="bottom"
													theme="material"
												>
													<motion.img
														variants={item}
														whileHover={{ scale: 1.05 }}
														src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
														alt="Mongo DB"
													/>
												</Tippy>

												{/* EXPRESS */}

												<Tippy
													content="Express"
													placement="bottom"
													theme="material"
												>
													<motion.i
														variants={item}
														whileHover={{ scale: 1.05 }}
														class="devicon-express-original"
													></motion.i>
												</Tippy>

												{/* Next.js */}
												<Tippy
													content="Next.js"
													placement="bottom"
													theme="material"
												>
													<motion.i
														variants={item}
														whileHover={{ scale: 1.05 }}
														class="devicon-nextjs-original-wordmark nextjs"
													></motion.i>
												</Tippy>

												{/* GraphQL */}

												{/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" /> */}
												<Tippy
													content="GraphQL"
													placement="bottom"
													theme="material"
												>
													<motion.img
														variants={item}
														whileHover={{ scale: 1.05 }}
														src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
														alt="GraphQL"
													/>
												</Tippy>

												{/* JEST */}
												<Tippy
													content="Jest"
													placement="bottom"
													theme="material"
												>
													<motion.img
														variants={item}
														whileHover={{ scale: 1.05 }}
														src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
														alt="Jest"
													/>
												</Tippy>
											</motion.div>
										</div>
									</div>
								</div>
							</div>
							{/* TODO - Add different motion values depending on screen-size. Use media queries hook */}
							<motion.img
								initial={{ x: 50, y: -30 }}
								animate={{ x: -30, y: 100 }}
								// drag
								// dragConstraints={{
								// 	top: 100,
								// 	bottom: 0,
								// 	left: 350,
								// 	right: 250,
								// }}
								transition={{
									duration: 20,
									repeat: Infinity,
									repeatType: 'reverse',
								}}
								className="right-40 ml-auto h-[450px] w-[450px] xl:h-80 xl:w-80"
								src={images.astronaut}
								alt=""
							/>
						</div>
					</>
				)}
			</Page>
		</>
	);
};

export default About;
