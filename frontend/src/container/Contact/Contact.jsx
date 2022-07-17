import React from 'react';
import Page from '../Page';
import { ContactForm } from '../../components/ContactForm';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';

const Contact = () => {
	return (
		<Page id="contact" styles="bg-light-green">
			<div className="mb-16">
				<h2 className="text-8xl font-bold text-primary">CONTACT</h2>
			</div>
			<div className="flex gap-20">
				<div className="w-1/2 text-lg">
					<h3 className="text-3xl tracking-wider mb-8 font-semibold">
						YOU DESERVE A BEAUTIFUL WEBSITE!
					</h3>
					<div className="flex flex-col gap-4 leading-loose">
						<p>
							I help small businesses stand out on the web by providing them
							with a unique custom website.
						</p>
						<p>
							You can either contact me by using one of the links below, or by
							filling out the contact form.
						</p>
						<p>Let's connect!</p>
						<IconContext.Provider value={{ size: '1.5em' }}>
							<div className="flex gap-4 text-primary items-center">
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
				<div className="w-1/2">
					<h3 className="text-3xl tracking-wider mb-1 font-semibold uppercase">
						I'm open to work!
					</h3>
					<motion.div
						initial={{ width: '0%' }}
						whileInView={{ width: '100%' }}
						transition={{ bounce: 0, type: 'spring', duration: 1.2 }}
						viewport={{ once: true }}
						className="w-full bg-primary h-1 mb-8 "
					></motion.div>
					<ContactForm />
				</div>
			</div>
		</Page>
	);
};

export default Contact;
