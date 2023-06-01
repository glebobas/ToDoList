const path = require('path');

const contentPath = path.join(__dirname, 'src/**/*.{js,ts,jsx,tsx}');

const colors = {
	orange: {
		100: '#ED721C',
		200: '#DF640E',
		400: '#F7DCB1',
	},
	yellow: {
		100: '#F5AD14',
		200: '#E39B02',
	},
	brown: {
		300: '#7B5134',
		400: '#9A4509',
	},
	red: {
		100: '#CD3D23',
		200: '#A61600',
		300: '#fbd5d5',
		400: '#9b1c1c',
		500: '#e02424',
		600: '#f6b8b8',
		900: '#FF0000',
	},
	green: {
		100: '#00C187',
		200: '#bcf0da',
		300: '#03543f',
		400: '#057a55',
		500: '#99e7c6',
	},
};

const screens = {
	mobile: '576px',
	tablet: '768px',
	desktop: '1024px',
};

module.exports = {
	content: [contentPath],
	theme: {
		extend: {
			fontFamily: {
				sourceSansPro: ['"Source Sans Pro"', 'sans-serif'],
			},
			screens,
			colors,
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
