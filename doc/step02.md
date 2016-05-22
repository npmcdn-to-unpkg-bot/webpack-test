# Step 02 - directories

Here we will just split out our source code into a separate directory
and have a separate directory for our destination web site.  This
is useful so the build tools have a place to look for source code and
not get confused and to have a clean output directory for our 
website.

## Stop lite-server

Stop lite-server if it is running, go to the console and use CTRL+C.

## bundle.js

Delete `bundle.js`, we will re-create it when we build later

## src

Create a directory called `src` and move entry.js into it.

    src/entry.js
    
## dist

Create a directory called `dist` and move index.html into it.  Also
change the heading to say 'Webpack Test Step 2' if you want.

    dist/index.html
    
## lite-server

Now CD to the dist directory and run `lite-server`.  Your browser
should open and display the heading without the message from
`entry.js` because `bundle.js` is now gone.  Leave it open and
leave lite-server running and you should see the message when
we build `bundle.js` in the next step. 

If you screw up and save the file with bad tags, the web page might 
not auto-reload.  This is because the browser sync script injected
into the page by `lite-server` cannot run.  Just fix the file and
refresh the page in the browser.

## build

Now run this command in the root directory (that contains `src` and `dist`)
and you should see the updated web page.

    webpack src/entry.js dist/bundle.js
    
Actually, that didn't work for me.  Maybe lite-server doesn't notice new
files or removed files?  Either run the build again to update the file
and trigger the browser sync or just refresh your browser.


