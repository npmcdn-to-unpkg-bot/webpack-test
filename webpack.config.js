/*
 To configure webpack, set module.exports to a configuration object.
 
 Documentation: https://webpack.github.io/docs/configuration.html
 */

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: "./dist",
    filename: "bundle.js" 
  }
};
