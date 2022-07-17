/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#1d2939',
				beige: '#f4ead7',
				purple: '#dfd7f4',
				'light-green': '#d7f1cb',
				offwhite: '#F7F7F7',
			},

			screens: {
				// change from the default mobile-first breakpoints to desktop-first, breakpoints are the same.
				xs: { max: '460px' },
				sm: { max: '640px' },
				md: { max: '768px' },
				lg: { max: '1024px' },
				xl: { max: '1280px' },
				'2xl': { max: '1536px' },
				'3xl': { max: '1624px' },
			},

			letterSpacing: {
				widest: '.80em',
			},

			fontSize: {
				homepage: ['13vw', 0.9],
			},

			keyframes: {
				moveUp: {
					'0%, 100%': { transform: 'translateY(-10px)' },
				},
			},

			animation: {
				moveUp: 'moveUp 1s ease-in-out',
			},
		},
	},
	plugins: [],
};
