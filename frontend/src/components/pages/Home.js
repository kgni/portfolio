import React from 'react';
import Page from '../UI/Page';
import Navbar from '../nav/Navbar';
import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Home = () => {
	return (
		<Page id="home" styles="bg-beige text-primary">
			<Navbar currentPage="1" page="home" />
			<div className="flex flex-col justify-center items-center h-full">
				<h1 className="text-homepage font-black mb-7 mt-auto">
					<span className="block">WEB</span> DEVELOPER
				</h1>
				<h2 className="text-center tracking-widest">KARL NIELSEN</h2>
				<ul className="flex gap-8 mt-auto text-2xl">
					<li>
						<a href="">
							<FaTwitter />
						</a>
					</li>
					<li>
						<a href="">
							<FaLinkedin />
						</a>
					</li>
					<li>
						<a href="">
							<FaGithub />
						</a>
					</li>
					<li>
						<a href="">
							<MdEmail />
						</a>
					</li>
				</ul>
			</div>
		</Page>
	);
};

export default Home;
