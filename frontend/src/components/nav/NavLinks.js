import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const NavLinks = ({ page, isScrolled }) => {
	return (
		<ul
			className={`flex font-semibold items-center text-xl duration-150 ${
				isScrolled ? 'text-sm gap-6' : 'text-xl gap-8'
			}`}
		>
			{' '}
			{/* <li
				className={`cursor-pointer duration-150 ${
					page === 'home' ? 'opacity-100' : 'opacity-20'
				} hover:opacity-100`}
			>
				<Link smooth={true} duration={500} to="home">
					home
				</Link>
			</li> */}
			<motion.li
				className={`cursor-pointer ${
					page === 'about' ? 'opacity-100' : 'opacity-100'
				} hover:opacity-100`}
			>
				<Link smooth={true} duration={500} to="about">
					about
				</Link>
			</motion.li>
			<motion.li
				className={`cursor-pointer ${
					page === 'projects' ? 'opacity-100' : 'opacity-100'
				} hover:opacity-100`}
			>
				<Link smooth={true} duration={500} to="projects">
					projects
				</Link>
			</motion.li>
			<motion.li
				className={`cursor-pointer ${
					page === 'contact' ? 'opacity-100' : 'opacity-'
				} hover:opacity-100`}
			>
				<Link smooth={true} duration={500} to="contact">
					contact
				</Link>
			</motion.li>
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
	);
};

export default NavLinks;
