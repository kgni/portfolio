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

			screens: {},

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
