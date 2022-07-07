import React from 'react';
import { Link } from 'react-scroll';

const NavLinks = ({ page }) => {
	return (
		<ul className="flex gap-12 text-xl">
			{' '}
			<li
				className={`cursor-pointer duration-150 ${
					page === 'home' ? 'opacity-100' : 'opacity-20'
				} hover:opacity-100`}
			>
				<Link smooth={true} duration={500} to="home">
					home
				</Link>
			</li>
			<li
				className={`cursor-pointer duration-150 ${
					page === 'about' ? 'opacity-100' : 'opacity-20'
				} hover:opacity-100`}
			>
				<Link smooth={true} duration={500} to="about">
					about
				</Link>
			</li>
			<li
				className={`cursor-pointer duration-150 ${
					page === 'projects' ? 'opacity-100' : 'opacity-20'
				} hover:opacity-100`}
			>
				<Link smooth={true} duration={500} to="projects">
					projects
				</Link>
			</li>
			<li
				className={`cursor-pointer duration-150 ${
					page === 'contact' ? 'opacity-100' : 'opacity-20'
				} hover:opacity-100`}
			>
				<Link smooth={true} duration={500} to="contact">
					contact
				</Link>
			</li>
		</ul>
	);
};

export default NavLinks;
