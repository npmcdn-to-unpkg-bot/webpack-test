# Typescript vs Javascript Modules

## javascript - CommonJS

For javascript, a module is represented by the `module` object.  To provide
things to someone importing your module you set properties on the
`module.exports` object.

Create a `jsmodule` directory and an `index.js` file in it.  This will define
what is exported when something requires the directory.  Just enter this code
for now:

    module.exports["name"] = "jsmodule/index.js";
    console.log('jsmodule.index - module: ', module);
    console.log('json:', JSON.stringify(module, null, 2));

And change entry.js so it just loads this module:

    document.write('<p>entry.js says "Hello, world!"</p>');
    var jsmodule = require('./jsmodule');
    console.log('jsmodule:', JSON.stringify(jsmodule, null, 2));
    
Look in the browser console and you should see that `module` in 
`./jsmodule/index` is an object:

    json: {
        "exports": {
            "name": "jsmodule/index.js"
        },
        "id": 4,
        "loaded": false,
        "paths": [],
        "children": [],
        "webpackPolyfill": 1
    }
    
This object is provided by the CommonJS module system (used by node) 
and allows our code to add properties to 'module.exports', or to overwrite
it completely.  The code in `entry.js` shows an empty object, this is the
`exports` property that is provided by `require`:

    jsmodule: {
        "name": "jsmodule/index.js"
    }

## typescript

In typescript we are not provided with the modules object, but rather export
things explicitly.  Create a folder called `tsmodule` and a file called
`index.ts`:

    declare var module: any; // access a global variable
    export const name = "tsmodule/index.ts";
    console.log('tsmodule - module: ', JSON.stringify(module, null, 2));

And require this from `entry.js`:

    var tsmodule = require('./tsmodule');
    console.log('tsmodule:', JSON.stringify(tsmodule, null, 2));


