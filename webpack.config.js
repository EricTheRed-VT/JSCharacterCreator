'use strict';

import webpack from 'webpack';

const config = {
  entry: './browser/index.jsx',
  output: {
    path: __dirname,
    filename: './browser/public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};

export default config;
