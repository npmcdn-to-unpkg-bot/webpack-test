# Step 03 - Config

You might be sick of typing out the entry point and destination every
time, I know I am.  Here we will create a config file so we can
just run `webpack` and do the build.

## webpack.config.js

The default configuration file if you just run `webpack` is `webpack.config.js`.
You can use the `--config` option to specify a file, but for now just
create the file in the root:

    module.exports = {
      entry: "./src/entry.js",
      output: {
        path: "./dist",
        filename: "bundle.js" 
      }
    };

## run webpack

Now you just have to type 'webpack' to create our bundle:

    webpack
    