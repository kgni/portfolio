import React from 'react';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<h1 className="bg-primary py-4 text-center font-bold text-offwhite">
			MDIA &copy; {year}
		</h1>
	);
};

export default Footer;
