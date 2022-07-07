import React from 'react';

const Page = ({ children, styles, id }) => {
	return (
		<section id={id} className={`snap-start h-screen  pt-12 pb-24 ${styles}`}>
			<div className="w-11/12 h-full m-auto">{children}</div>
		</section>
	);
};

export default Page;
