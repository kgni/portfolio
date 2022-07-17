import React from 'react';
const Page = ({ children, styles, id }) => {
	return (
		<>
			<section
				id={id}
				className={`h-screen section overflow-hidden ${
					id === 'home' ? 'pt-16 pb-24 xs:pb-0 grow' : 'pt-28 pb-24'
				} ${styles}`}
			>
				<div className="w-9/12 lg:w-10/12 h-full m-auto">{children}</div>
			</section>
		</>
	);
};

export default Page;
