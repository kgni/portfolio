import React from 'react';
import NavLinks from './NavLinks';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ currentPage, page }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	function checkIfScrolled() {
		if (window.scrollY >= 400) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	}

	window.addEventListener('scroll', checkIfScrolled);
	return (
		<header
			className={`flex fixed w-full duration-200 ${
				isScrolled ? 'navbar-scrolled h-16' : 'h-20 text-primary'
			}`}
		>
			<motion.nav
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2, default: { duration: 1.5 } }}
				className={`w-9/12 m-auto flex bg-transparent justify-between items-center font-bold z-[999]`}
			>
				<Link smooth={true} duration={500} to="home" className="cursor-pointer">
					mdia.
				</Link>
				{/* <PageCount currentPage={currentPage} /> */}
				<NavLinks isScrolled={isScrolled} page={page} />
			</motion.nav>
		</header>
	);
};

export default Navbar;
