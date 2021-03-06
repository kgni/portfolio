import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Oval } from 'react-loader-spinner';
import { IconContext } from 'react-icons';
import { MdErrorOutline } from 'react-icons/md';
import { AiOutlineCheck } from 'react-icons/ai';

export const ContactForm = () => {
	const [isPending, setIsPending] = useState(false);
	const [isFulfilled, setIsFulfilled] = useState(false);
	const [isRejected, setIsRejected] = useState(false);

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		setIsPending(true);
		setIsFulfilled(false);
		setIsRejected(false);

		emailjs
			.sendForm(
				'service_e2xbj56',
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log('Message Sent');

					setIsPending(false);
					setIsRejected(false);
					setIsFulfilled(true);

					setTimeout(() => {
						setIsFulfilled(false);
					}, 3000);
				},
				(error) => {
					console.log(error.text);
					setIsPending(false);
					setIsFulfilled(false);
					setIsRejected(true);
					setTimeout(() => {
						setIsRejected(false);
					}, 3000);
				}
			);
	};

	return (
		<form ref={form} className="w-full" onSubmit={sendEmail}>
			<div className="mb-3 flex h-10 gap-3">
				<input
					onFocus={(e) => (e.target.placeholder = '')}
					onBlur={(e) => (e.target.placeholder = 'name')}
					placeholder="name"
					className="w-1/2 p-4"
					type="text"
					name="user_name"
					required
				/>
				<input
					onFocus={(e) => (e.target.placeholder = '')}
					onBlur={(e) => (e.target.placeholder = 'email')}
					placeholder="email"
					className="w-1/2 p-4"
					type="email"
					name="user_email"
					required
				/>
			</div>
			<textarea
				onFocus={(e) => (e.target.placeholder = '')}
				onBlur={(e) => (e.target.placeholder = 'write your message here...')}
				placeholder="write your message here..."
				className="xs:h-46 md:h-58 mb-3 h-48 w-full p-4 lg:h-64"
				name="message"
				required
			/>
			{/* // TODO - Animations: - pending, fulfilled, rejected, modal popup on error or success */}
			<IconContext.Provider value={{ className: 'contact-button-icons' }}>
				<motion.button
					transition={{ duration: 1 }}
					className={`relative flex w-full cursor-pointer items-center justify-center gap-2 bg-primary py-2 font-semibold text-offwhite duration-200 hover:bg-primary-hover ${
						isFulfilled && 'bg-green-600'
					} ${isRejected && 'bg-red-600'}`}
				>
					SEND
					{isPending && (
						<Oval
							color="#F7F7F7"
							secondaryColor="#F7F7F7"
							height={15}
							width={15}
							strokeWidth={5}
						/>
					)}
					{isFulfilled && <AiOutlineCheck />}
					{isRejected && <MdErrorOutline />}
				</motion.button>
			</IconContext.Provider>
		</form>
	);
};
