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
  ],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};
