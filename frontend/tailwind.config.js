/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			'3xl': { max: '1624px' },
			'2xl': { max: '1536px' },
			xl: { max: '1280px' },
			lg: { max: '1042px' },
			md: { max: '775px' },
			sm: { max: '640px' },
			xs: { max: '570px' },
			xxs: { max: '460px' },
			xxxs: { max: '420px' },
		},
		extend: {
			colors: {
				primary: '#1d2939',
				'primary-hover': '#2b3d55',
				beige: '#f4ead7',
				purple: '#dfd7f4',
				'light-green': '#d7f1cb',
				offwhite: '#F7F7F7',
				'offwhite-hover': '#d2d2d2',
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
