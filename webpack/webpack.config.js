const path = require('path');

const modules = (context) => ({
  ts: {
    test: /\.ts(x?)$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  },
  js: {
    test: /\.(js)$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'entry',
              },
            ],
          ],
        },
      },
    ],
    exclude: /node_modules/,
  },
  files: {
    test: /\.(png|jpg|ico)$/,
    use: ['file-loader'],
  },
  svg: {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  },
  css: {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            config: path.resolve(context, 'postcss.config.js'),
          },
        },
      },
    ],
  },
});

const resolve = (context) => ({
  extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
  alias: {
    '@/public': path.resolve(context, './public'),
    '@': path.resolve(context, './src'),
  },
});

module.exports = ({ context }) => ({
  modules: modules(context),
  resolve: resolve(context),
});
