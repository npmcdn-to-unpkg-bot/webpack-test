# typescript

First we need to add two node modules: `typescript` and `ts-loader`:

    npm i typescript --save-dev
    npm i ts-loader --save-dev

Now we need to add a `tsconfig.json` file.  This tells the typescript
compiler how to compile.

    {
      "compilerOptions": {
        "target": "es5",
        "sourceMap": true
      },
      "exclude": [
        "node_modules",
        "dist"
      ]
    }

Next we add these options to `webpack.config.js`.  They tell webpack that
the ts and tsx file name extensions can be resolved?  And the loader
tells webpack to use the `ts-loader` loader to handle `ts` and `tsx` files.

I *think* the name 'test' means that the regex is a 'test' of the file name
to determine if the loader is to be used or not. 

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
  
# test.ts

Now let's create a file called `test.ts` in the `src` directory:

    export = function() {
      var message = "Typescript is cool!";
      document.write(`<p>test.ts says "${message}"`)
    }
    document.write("<p>test.ts is done</p>");

This uses a syntax you probably won't use in typescript to export a single
item:  https://www.typescriptlang.org/docs/handbook/modules.html


    