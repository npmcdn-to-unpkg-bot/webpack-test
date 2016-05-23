# Step 12 - Adding Angular 2 (a - cleaning up)

## Step 12a - cleaning up

Going to start clean this time, I'll keep the simple `index.html`
and `entry.js` including the typings for jquery, but remove
everything else.

## Step 12b - adding angular

Now to add angular 2, use npm to install the angular packages.
If it's easier you can just copy this to your dependencies section
in `package.json` and do `npm -i` to install the missing dependencies:

    "@angular/common":  "2.0.0-rc.1",
    "@angular/compiler":  "2.0.0-rc.1",
    "@angular/core":  "2.0.0-rc.1",
    "@angular/http":  "2.0.0-rc.1",
    "@angular/platform-browser":  "2.0.0-rc.1",
    "@angular/platform-browser-dynamic":  "2.0.0-rc.1",
    "@angular/router":  "2.0.0-rc.1",

Or execute the install command for them all with `--save-dev` specifed
to save them to `package.json`:

    npm install --save-dev @angular/common @angular/compiler @angular/core
    // and so on
    
NPM will give you errors saying that there are unmet peer dependencies:

    +-- UNMET PEER DEPENDENCY rxjs@5.0.0-beta.6
    `-- UNMET PEER DEPENDENCY zone.js@^0.6.6
    
So install them as well:

    npm install --save-dev rxjs zone.js
    
You might get an error that rxjs still wasn't found but I think it is
installed.  You can do `npm install` anyway if you want.

## Step 12c - simple rxjs test

I'm going to take the simple example from 
[this site](http://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/creating_and_querying_observable_sequences/creating_and_subscribing_to_simple_observable_sequences.html)
and try to get it to work.  Create a file called `src/rxtest.ts`:

    import { Observable } from "rxjs"

    // create an observable sequence of 5 integers, starting from 1
    var source = Observable.range(1, 5);

    // Prints out each item
    var subscription = source.subscribe(
        x => console.log('onNext: %s', x),
        e => console.log('onError: %s', e),
        () => console.log('onCompleted'));


Now require it in `entry.js`:
    
    document.write('<p>entry.js says "Hello, world!"</p>');
    require('./rxtest');

Now webpack compiles it and you should see the results in your
browser's console.  What?  How does webpack/typescript know where
to find "rxjs" to import the Observable class from?  

Try to remove the `rxjs` node module, you might need to stop
`lite-server` and `webpack --watch` if you have them running:

    npm uninstall rxjs
    
Now if you run `webpack`, you should bet an error:

    ERROR in ./src/rxtest.ts
    (1,28): error TS2307: Cannot find module 'rxjs'.

So you can see that webpack at least knows to look for modules we import
in the `node_modules` folder.  This can also be specified in `tsconfig.json`
if this doesn't work by adding this configuration property:

    moduleResolution: "node",

It [appears](https://github.com/Microsoft/TypeScript/issues/5039)
more work is being done on module resolution strategies, including `baseUrl`
and `rootDirs`.  Add the `rxjs` module back and it should work again.

    npm i rxjs --save-dev

Well, well, well...  Now it doesn't work.  I'm getting the dreaded
errors I got sometimes before:

    ERROR in C:\git\web\webpack-test\node_modules\rxjs\operator\toPromise.d.ts
    (7,59): error TS2304: Cannot find name 'Promise'.

I have no idea why this worked before because the class Promise is not
in any of the code I have.  To fix this, install the `core-js` package
from typings:

    typings install dt~core-js --save --global
    
Now webpack should build the bundle fine.
