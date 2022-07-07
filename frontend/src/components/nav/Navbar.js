import React from 'react';
import NavLinks from './NavLinks';
import PageCount from './PageCount';

const Navbar = ({ currentPage, page }) => {
	return (
		<header>
			<nav className="flex justify-between font-bold">
				<PageCount currentPage={currentPage} />
				<NavLinks page={page} />
			</nav>
		</header>
	);
};

export default Navbar;
