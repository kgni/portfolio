import React from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ currentPage, page }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [toggle, setToggle] = useState(false);

	function checkIfScrolled() {
		if (window.scrollY >= 400) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	}

	window.addEventListener('scroll', checkIfScrolled);
	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 2, default: { duration: 1.5 } }}
			className={`flex fixed w-full duration-200 z-10 ${
				isScrolled ? 'navbar-scrolled h-16' : 'h-20 text-primary'
			}`}
		>
			<div
				className={`w-9/12 lg:w-10/12 m-auto flex bg-transparent justify-between items-center font-bold z-[999]`}
			>
				<Link smooth={true} duration={500} to="home" className="cursor-pointer">
					mdia.
				</Link>
				<div
					className={`navbar-desktop flex bg-transparent justify-between items-center font-bold z-[999]`}
				>
					<ul
						className={`flex font-semibold items-center text-xl duration-150 ${
							isScrolled ? 'text-sm gap-6' : 'text-xl gap-8'
						}`}
					>
						{['about', 'projects', 'contact'].map((item) => (
							<li key={`link-${item}`}>
								<Link
									className="cursor-pointer"
									smooth={true}
									duration={500}
									to={item}
								>
									{item}
								</Link>
							</li>
						))}
						<li className="flex items-center gap-2 text-2xl">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.linkedin.com/in/kgni/"
							>
								<FaLinkedin />
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/kgni"
							>
								<FaGithub />
							</a>
						</li>
					</ul>
				</div>

				<div className="navbar-menu">
					<HiMenuAlt4
						className="open-icon cursor-pointer"
						onClick={() => setToggle(true)}
					/>

					{toggle && (
						<motion.div
							className="bg-offwhite"
							whileInView={{ x: [300, 0] }}
							transition={{ duration: 0.85, ease: 'easeOut' }}
						>
							<HiX
								className="close-icon cursor-pointer"
								onClick={() => setToggle(false)}
							/>
							<ul className="text-primary flex flex-col grow mt-12">
								{['about', 'projects', 'contact'].map((item) => (
									<motion.li
										whileHover={{
											color: '#5E81AF',
											transition: { duration: 0.2 },
										}}
										className="m-3"
										key={item}
									>
										<Link
											className="cursor-pointer"
											smooth={true}
											duration={500}
											to={item}
											onClick={() => setToggle(false)}
										>
											{item}
										</Link>
									</motion.li>
								))}
								<li className="flex grow justify-center items-end gap-6 mt-6 text-2xl ">
									<motion.a
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.2 },
										}}
										onTap={{
											scale: 0.9,
										}}
										target="_blank"
										rel="noopener noreferrer"
										href="https://www.linkedin.com/in/kgni/"
									>
										<FaLinkedin />
									</motion.a>
									<motion.a
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.2 },
										}}
										onTap={{
											scale: 0.9,
										}}
										target="_blank"
										rel="noopener noreferrer"
										href="https://github.com/kgni"
									>
										<FaGithub />
									</motion.a>
								</li>
							</ul>
						</motion.div>
					)}
				</div>
			</div>
		</motion.nav>
	);
};

export default Navbar;
