const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const TerserJsPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpackConfig = require('./webpack.config');

const context = path.resolve(__dirname, '../');

module.exports = (env, argv) => {
  const modeEnv = argv.mode || 'development';
  const isProd = modeEnv === 'production';
  const config = webpackConfig({ context });

  const optimization = {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimizer: [],
  };

  const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new WebpackNotifierPlugin({ alwaysNotify: false }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public/content',
          to: './content',
        },
      ],
    }),
    new Dotenv({
    	path: path.resolve(context, '.env'),
    }),
    new NodePolyfillPlugin(),
  ];
  if (isProd) {
		optimization.minimize = true;
		optimization.minimizer.push(new TerserJsPlugin());
		optimization.minimizer.push(new CssMinimizerPlugin());
	}

  return {
    devtool: 'source-map',
    context,
    entry: {
      main: './src/index.tsx',
    },
    output: {
      path: path.resolve(context, './dist'),
      filename: 'assets/[name].[chunkhash].js',
      publicPath: '/',
    },
    module: {
      rules: [
        config.modules.ts,
        config.modules.js,
        config.modules.files,
        config.modules.svg,
        config.modules.css,
      ],
    },
    resolve: config.resolve,
    plugins,
    optimization,
    performance: {
      hints: false,
    },
    devServer: {
      compress: true,
      port: argv.port || 3000,
      hot: true,
      open: false,
      historyApiFallback: true,
    },
  };
};
