import React from 'react';

const PageCount = ({ currentPage }) => {
	return (
		<div className="flex items-end gap-1">
			<span className="text-xl">0{currentPage}</span>
			<span className="text-md opacity-30">/</span>
			<span className="text-md opacity-30">04</span>
		</div>
	);
};

export default PageCount;
