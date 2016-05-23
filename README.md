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
