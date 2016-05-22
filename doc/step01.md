# Introduction

To get started, install webpack and lite-server globally.  Webpack is what will be
used to bundle and lite-server will be our web server.  We will be able to use these
commands anywhere and not have to install them in every project.

    npm install -g lite-server
    npm install -g webpack
    
# First compile

What we're doing is simply making a single javascript file that will write something
to the document, and using webpack to compile it into a bundle.  Might as
well just include the file as a script in the html, but this just shows us
using webpack.

entry.js:
  
    document.write('entry.js says "Hello, world!"');
    
Now we run webpack to create `bundle.js` from this file:

    webpack ./entry.js bundle.js
    
What this does is pass entry.js as the file webpack needs to start.  If this file
imported anything, webpack would follow all of it's imports and include any js
that it uses.  It will actually be larger with a lot of webpack comments, but
I think in the future filters

# Html file

Now the html file, simply a heading and loading our bundle:

    <html>
      <head>
        <title>Webpack Test Step 1</title>
      </head>
      <body>
        <h1>Webpack Test Step 1</h1>
        <script type="text/javascript" src="bundle.js"></script>
      </body>
    </html>

# Lite-Server

Now from the command-line run lite-server:

    lite-server
    
This should start serving your index.html on port 3000 and open up a browser for you.
Whenever you make a change to any html, htm, css or js files it will refresh your
browser automatically.
