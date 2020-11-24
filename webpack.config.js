const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const envPath = '.env';

module.exports = {
  entry: join(__dirname, './src', 'main.tsx'),
  target: 'web',
  mode: 'development',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: join(__dirname, 'build'),
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: './src/styles.css',
    }),
    new Dotenv({
      path: envPath,
    }),
  ],
};
