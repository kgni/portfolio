import React from 'react';
import Page from '../UI/Page';

const Home = () => {
	return (
		<>
			<Page id="home" styles="bg-beige text-primary">
				<div className="flex flex-col justify-center items-center h-full">
					<h1 className="text-homepage font-black mb-7 ">
						<span className="block">WEB</span> DEVELOPER
					</h1>

					<h2 className="text-center tracking-widest">KARL NIELSEN</h2>
				</div>
			</Page>
		</>
	);
};

export default Home;
