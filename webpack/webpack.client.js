const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');

const context = path.resolve(__dirname, '../');

module.exports = () => {
  const config = webpackConfig({ context });
  return {
    context,
    entry: './src/index.tsx',
    output: {
      path: path.resolve(context, './dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
    module: {
      rules: [config.modules.ts, config.modules.svg, config.modules.files],
    },
    resolve: config.resolve,
  };
};
