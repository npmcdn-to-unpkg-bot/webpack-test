/*
 To configure webpack, set module.exports to a configuration object.
 
 Documentation: https://webpack.github.io/docs/configuration.html
 */

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: "./dist",
    filename: "bundle.js" 
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/index.html' }
    ])
  ]
  /*
  ,
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
  */
};
