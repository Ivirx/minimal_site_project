const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./index.html', './src/**/*.{js,ts}'],
	theme: {
		extend: {
			width: {
				clamp: 'clamp(320px, 100%, 1240px)',
			},
			screens: {
				sm: '525px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
			colors: {
				light: '#ededed',
				dark: '#111111',
				accent: '#ededed',
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				openSans: ['"Open Sans"', 'sans-serif'],
				majorMono: ['"Major Mono Display"', 'monospace'],
			},
			animation: {
				'fade-in': 'fade-in 350ms forwards',
				'fade-out': 'fade-out 350ms forwards',
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0' },
					'20%': { opacity: '0.65' },
					'100%': { opacity: '1' },
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'20%': { opacity: '0.65' },
					'100%': { opacity: '0' },
				},
			},
		},
	},
	plugins: [],
};
