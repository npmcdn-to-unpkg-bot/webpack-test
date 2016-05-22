# modules

## include.js

Let's add a second javascript file and reference it from our main file.
Create a file called `include.js` in the `src` directory:

    module.exports = function() {
      document.write('<p>include.js says hi!</p>');  
    };
    document.write('<p>include.js has run</p>');

## entry.js

If you ran webpack now it would not be included in any way in your `bundle.js`.
That is because webpack is only looking at `entry.js` and following the
modules it requires.  So let's require it and call the function that is 
exported:

    var sayhi = require('./include.js');
    document.write('<p>entry.js says "Hello, world!"</p>');
    sayhi();

Now when you run `webpack` you should see these three lines in your browser:

    include.js has run

    entry.js says "Hello, world!"

    include.js says hi!

## How it works

You can see that `require()` simply runs the javascript file you pass
to it and returns the value of `module.exports`.  The module doesn't have
to export anything, it could just run javascript on it's own, or it could
export a string or a number.