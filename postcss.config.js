const path = require('path');
// const context = path.resolve(__dirname, './');
console.log('===========>tail', path.resolve(__dirname, 'tailwind.config.js'))

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
