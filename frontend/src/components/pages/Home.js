import React from 'react';
import Page from '../UI/Page';
import Navbar from '../nav/Navbar';

const Home = () => {
	return (
		<Page id="home" styles="bg-beige text-primary">
			<Navbar currentPage="1" page="home" />
			<div className="flex flex-col justify-center items-center h-full">
				<h1 className="text-homepage font-black mb-7 mt-auto">
					<span className="block">WEB</span> DEVELOPER
				</h1>
				<h2 className="text-center tracking-widest">KARL NIELSEN</h2>
				<ul className="flex gap-4 mt-auto">
					<li>
						<a href="">twitter</a>
					</li>
					<li>
						<a href="">linkedin</a>
					</li>
					<li>
						<a href="">github</a>
					</li>
					<li>
						<a href="">mail</a>
					</li>
				</ul>
			</div>
		</Page>
	);
};

export default Home;
