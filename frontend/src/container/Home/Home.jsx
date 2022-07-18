import React from 'react';
import Page from '../Page';
import { motion } from 'framer-motion';

const Home = () => {
	return (
		<>
			<Page id="home" styles="bg-beige text-primary">
				<div className="xs:pt-30 flex h-full flex-col items-center justify-center md:justify-start md:pt-40 xxs:pt-28">
					<h1 className="mb-7 text-homepage font-black xl:text-center ">
						<motion.span
							initial={{ x: -2000 }}
							animate={{ x: 0 }}
							transition={{
								type: 'spring',
								stiffness: 500,
								default: { duration: 2 },
							}}
							className="block xl:text-[22vw]"
						>
							WEB
						</motion.span>
						<motion.span
							initial={{ x: 2000 }}
							animate={{ x: 0 }}
							transition={{
								type: 'spring',
								stiffness: 500,
								default: { duration: 2 },
							}}
							className="block"
						>
							DEVELOPER
						</motion.span>
					</h1>

					<motion.h2
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 2, default: { duration: 1.5 } }}
						className="text-center tracking-widest xs:text-xs"
					>
						KARL NIELSEN
					</motion.h2>
				</div>
			</Page>
		</>
	);
};

export default Home;
