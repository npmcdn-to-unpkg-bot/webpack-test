# External libraries - jquery

Now I want to include jquery so that I can use it in typescript and javascript.
Im going to change `index.html` to give it two headings for us to access:

    <h1>Webpack Test Step 9</h1>
    <h2 id="js">'js' header</h2>
    <h2 id="ts">'ts' header</h2>
    <script type="text/javascript" src="bundle.js"></script>

And change `jsmodule/index.js` to set the background color to light green:

    document.getElementById('js').style.backgroundColor = "#e0f8e0";
 
And change 'tsmodule/index.ts' to set the background color to light blue:

    document.getElementById('ts').style.backgroundColor = "#e0e0f8";

You should see this in your browser.

## Adding jquery manually

To show the naive way to do it, let's add jquery to our `index.html` and
access it manually:

    <h1>Webpack Test Step 9</h1>
    <h2 id="js">'js' header</h2>
    <h2 id="ts">'ts' header</h2>
    <script type="text/javascript" src="//npmcdn.com/jquery@2.2.4"></script>
    <script type="text/javascript" src="bundle.js"></script>

And in `jsmodule/index.js` let's change it to use jquery and add the text
'jquery' to our heading:

    document.getElementById('ts').style.backgroundColor = "#e0e0f8";
    $('#ts').append(' - jquery');

This works now, but let's change our `tsconfig.json` to disallow implicit
any type for unknown variables.  This will make our site more reliable because
the typescript compiler will error if we use a variable we haven't declared:

    {
        "compilerOptions": {
            "target": "es5",
            "sourceMap": true,
            "noImplicitAny": true
        },
        "exclude": [
            "node_modules",
            "dist"
        ]
    }

Now you should see an error when webpack tries to compile it:

    ERROR in ./src/tsmodule/index.ts
    (2,1): error TS2304: Cannot find name '$'.

To fix this quickly we can tell typescript that we know the variable is
defined elsewhere and that the type is 'any':

    document.getElementById('ts').style.backgroundColor = "#e0e0f8";
    declare var $: any;
    $('#ts').append(' - jquery');
