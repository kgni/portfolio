import React from 'react';
import Page from '../Page';
import { ContactForm } from '../../components/ContactForm';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';
import useMediaQuery from '../../hooks/useMediaQuery';

const Contact = () => {
	const isDesktop = useMediaQuery('(max-width: 1624px)');
	return (
		<Page id="contact" styles="bg-light-green">
			<div className="mb-16 md:mb-8">
				<h2 className="text-8xl font-bold text-primary md:mb-4 md:text-4xl">
					CONTACT
				</h2>
			</div>
			<div className="flex gap-20 md:block">
				<div className="w-1/2 text-lg md:w-full">
					{isDesktop ? (
						<h3 className="mb-1 text-3xl font-semibold tracking-wider lg:text-2xl md:font-bold xxxs:text-xl">
							YOU DESERVE...{' '}
							<span className="3xl:block lg:block md:inline-block ">
								A BEAUTIFUL WEBSITE!
							</span>
						</h3>
					) : (
						<h3 className="mb-1 text-3xl font-semibold tracking-wider lg:text-xl">
							YOU DESERVE
							<span className="lg:block"> A BEAUTIFUL WEBSITE!</span>
						</h3>
					)}

					<div className="flex flex-col gap-4 leading-loose xxxs:text-lg xxxs:leading-loose">
						<p className="mt-8 3xl:mt-2">
							I help small businesses stand out on the web by providing them
							with a unique custom website.
						</p>
						<p>
							You can either contact me by using one of the links below, or by
							filling out the contact form.
						</p>
						<div className="md:mb-8 md:flex md:items-center md:gap-4">
							<p className="mb-4 md:mb-0">Let's connect!</p>
							<IconContext.Provider value={{ size: '1.5em' }}>
								<div className="flex items-center gap-4 text-primary md:bottom-0">
									<motion.a
										whileHover={{ scale: 1.1 }}
										href="https://www.linkedin.com/in/kgni/"
										target="_blank"
										rel="noreferrer noopener"
									>
										<FaLinkedin />
									</motion.a>
									<motion.a
										whileHover={{ scale: 1.1 }}
										href="https://github.com/kgni"
										target="_blank"
										rel="noreferrer noopener"
									>
										<FaGithub />
									</motion.a>
									<motion.a
										whileHover={{ scale: 1.05 }}
										href="mailto:mail@mdia.dk"
									>
										<MdEmail className="text-xl" />
									</motion.a>
								</div>
							</IconContext.Provider>
						</div>
					</div>
				</div>
				<div className="w-1/2 md:w-full">
					<h3 className="mb-1 text-3xl font-semibold uppercase tracking-wider lg:text-2xl md:text-xl">
						I'm open to work!
					</h3>
					<motion.div
						initial={{ width: '0%' }}
						whileInView={{ width: '100%' }}
						transition={{ bounce: 0, type: 'spring', duration: 1.2 }}
						viewport={{ once: true }}
						className="mb-8 h-1 w-full bg-primary 3xl:mb-4 lg:mb-4 md:mb-6 md:h-0.5"
					></motion.div>
					<ContactForm />
				</div>
			</div>
		</Page>
	);
};

export default Contact;
