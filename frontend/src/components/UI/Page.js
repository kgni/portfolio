import React from 'react';

const Page = ({ children, styles, id }) => {
	return (
		<section id={id} className={`snap-start h-screen  py-12 ${styles}`}>
			<div className="w-11/12 m-auto">{children}</div>
		</section>
	);
};

export default Page;
