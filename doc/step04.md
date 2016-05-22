# NPM package, copy-webpack-plugin

Here we will use the webpack plugin [copy-webpack-plugin][1] so that
we can put our html in our `src` directory and have webpack copy it
to dist.  This will allow us to keep all the files we care about in
`src` so we can clean the `dist` directory and add it to `.gitignore`.

[1]: https://github.com/kevlened/copy-webpack-plugin

## index.html

First, move the `index.html` file from `dist` to `src`.

## create npm package

We will create a `package.json` file so that we can add node modules
to our project.  First we initialize it with `npm init`, which will
create a simple `package.json` file.

    npm init
    
 Fill out the prompts with whatever seems appropriate, or just hit
 'ENTER' for the defaults.  These all go in `package.json` so you 
 can edit it later.
 
 ## install copy-webpack-plugin
 
 Now we will install the `copy-webpack-plugin` locally so we can use
 it.  This will download the plugin from the node repository and
 put it in the `node_modules` directory.  We SHOULD specify
 `--save-dev`, which sill also add it to the list of dependencies
 in `package.json`.  This lets us have git ignore the `node_modules`
 directory, and we can restore all the packages in our dependencies
 withi `npm install` or `npm i`:
 
     npm install copy-webpack-plugin --save-dev
     
 ## Update config
 
 Now in our config we `require` the node module we installed above
 and add it to our exported config:
 
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
    };

Sicne we only specify the 'from', the file gets copied to the
path specified in `output`.

## run and check results

Now delete everything in your `dist` directory and run webpack:

    rm -rf dist/*
    webpack
    
This should copy index.html and create `bundle.js`.