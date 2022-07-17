import React from 'react';
import Page from '../Page';
import { motion } from 'framer-motion';
import useMediaQuery from '../../hooks/useMediaQuery';

const Home = () => {
	return (
		<>
			<Page id="home" styles="bg-beige text-primary">
				<div className="flex flex-col justify-center items-center h-full md:justify-start md:pt-40 xs:pt-30">
					<h1 className="text-homepage font-black mb-7 xl:text-center ">
						<motion.span
							initial={{ x: -2000 }}
							animate={{ x: 0 }}
							transition={{
								type: 'spring',
								stiffness: 500,
								default: { duration: 2 },
							}}
							className="block xl:text-[25vw]"
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
