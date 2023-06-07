const path = require('path');

const plugins = [
	'postcss-import',
	'tailwindcss/nesting',
	['tailwindcss', { config: path.resolve(__dirname, 'tailwind.config.js') }],
	'autoprefixer',
];

if (process.env.NODE_ENV === 'production') {
	plugins.push('cssnano');
}

module.exports = {
	plugins,
};
