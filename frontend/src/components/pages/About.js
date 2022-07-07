import React from 'react';
import Page from '../UI/Page';
import pbImage from '../../assets/img/pb-offwhite-bg.jpg';

const About = () => {
	return (
		<Page id="about" styles="bg-purple">
			{/* <Navbar currentPage="2" page="about" /> */}
			<div className="h-full flex justify-center items-center gap-24">
				<img className="rounded-full w-96" src={pbImage} alt="" />
				<div className="leading-8 w-1/3">
					<div className="mb-4">
						<h3 className="text-4xl font-semibold mb-2">Hi, I'm Karl!</h3>
						<p className="mb-2">
							Software developer from Denmark, currently living in Spain.
						</p>
						<p className="mb-2">
							Creative, detail-oriented, and always ready to learn new skills
							and further my growth and development.
						</p>
						<p>
							Feel free to check out my{' '}
							<a className="text-2xl font-semibold" href="/">
								resume
							</a>
							, or scroll to the next page for my projects!
						</p>
					</div>
					<div className="skills">
						<h3 className="text-xl font-bold uppercase mb-4">Skills</h3>
						<div className="grid grid-cols-6 items-center gap-x-4 gap-y-4 ">
							{/* HTML */}

							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
								alt="HTML5"
							/>

							{/* CSS */}

							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
								alt="CSS3"
							/>

							{/* JavaScript */}

							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
								alt="JavaScript"
							/>

							{/* TypeScript */}

							{/* React */}

							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
								alt="React"
							/>

							{/* Sass */}

							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
								alt="Sass"
							/>
							{/* Tailwind */}

							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
								alt="Tailwind"
							/>

							{/* Node.js */}

							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
								alt="Node.js"
							/>

							{/* MONGO */}
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
								alt="MongoDB"
							/>

							{/* EXPRESS */}

							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
								alt="Express"
							/>

							{/* Next.js */}

							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
								alt="Next.js"
							/>

							{/* GraphQL */}

							{/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" /> */}

							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
								alt="GraphQL"
							/>

							{/* JEST */}

							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
								alt="Jest"
							/>

							{/* CYPRUS */}
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
};

export default About;
