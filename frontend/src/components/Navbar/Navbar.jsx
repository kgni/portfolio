import React from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ currentPage, page }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 1, x: '100%' },
	};

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
			className={`fixed z-10 flex w-full duration-200 ${
				isScrolled ? 'navbar-scrolled h-16' : 'h-20 text-primary'
			}`}
		>
			<div
				className={`z-[999] m-auto flex w-9/12 items-center justify-between bg-transparent font-bold lg:w-10/12`}
			>
				<Link smooth={true} duration={500} to="home" className="cursor-pointer">
					mdia.
				</Link>
				<div
					className={`navbar-desktop z-[999] flex items-center justify-between bg-transparent font-bold`}
				>
					<ul
						className={`flex items-center text-xl font-semibold duration-150 ${
							isScrolled ? 'gap-6 text-sm' : 'gap-8 text-xl'
						}`}
					>
						{['about', 'projects', 'contact'].map((item) => (
							<motion.li key={`link-${item}`}>
								<Link
									className="cursor-pointer"
									smooth={true}
									duration={500}
									to={item}
								>
									{item}
								</Link>
							</motion.li>
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
						onClick={() => setIsOpen(true)}
					/>

					<motion.div
						variants={variants}
						animate={isOpen ? 'open' : 'closed'}
						transition={{ duration: 0.3 }}
						className="bg-offwhite"
					>
						<HiX
							className="close-icon cursor-pointer"
							onClick={() => setIsOpen(false)}
						/>
						<ul className="mt-12 flex grow flex-col text-primary">
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
										onClick={() => setIsOpen(false)}
									>
										{item}
									</Link>
								</motion.li>
							))}
							<li className="mt-6 flex grow items-end justify-center gap-6 text-2xl ">
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
				</div>
			</div>
		</motion.nav>
	);
};

export default Navbar;
