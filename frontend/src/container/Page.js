import React from 'react';
const Page = ({ children, styles, id }) => {
	return (
		<>
			<section
				id={id}
				className={`section h-screen overflow-hidden ${
					id === 'home'
						? 'h-screen grow pt-16 pb-24 xs:pb-0'
						: 'pt-28 pb-24 md:h-auto md:pt-12 md:pb-12 xs:pt-16'
				} ${styles}`}
			>
				<div className="m-auto h-full w-9/12 lg:w-10/12">{children}</div>
			</section>
		</>
	);
};

export default Page;
