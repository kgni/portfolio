import React from 'react';
const Page = ({ children, styles, id }) => {
	return (
		<>
			<section
				id={id}
				className={`section relative min-h-screen overflow-hidden ${
					id === 'home'
						? 'h-screen grow pt-16 pb-24 xs:pb-0'
						: 'pt-28 pb-24 md:h-auto md:pt-20 md:pb-20'
				} ${styles}`}
			>
				<div className="m-auto h-full w-9/12 lg:w-10/12">{children}</div>
			</section>
		</>
	);
};

export default Page;
