# Type definitions for jquery

Typescript doesn't provide a lot of value if you declare everything as 'any',
so let's see how we can tell it what type '$' is.  This will enable code
completion in a lot of editors so when you type `$(...).` you will see
the methods that you can call and their parameters.

## install typings

What typings does is find files like `[name].d.ts` that have type
definitions only.  It has different registries it searches through to
download these files locally into a `typings` directory.  We ***NEED***
to install typings globally for later, or the postinstall script
we add to `package.json` won't work.

    npm install -g typings

You should be able to type `typings --version` and see what version is instsalled
now.  Now type `typings search jquery` and see some results:

    NAME                          SOURCE HOMEPAGE                                 
    chai-jquery                   dt     https://github.com/chaijs/chai-jquery    
    jasmine-jquery                dt     https://github.com/velesin/jasmine-jquery
    jquery                        dt     http://jquery.com/                       
    jquery-ajax-chain             dt     https://github.com/humana-fragilitas/jQue

## install jquery type definitions
    
We want just normal 'jquery', so let's try to install it.  The `--save` flag
will tell typings to create a configuration file called 'typings.json' and
a folder called 'typings' to store our type definitions:

    typings install jquery --save
    
Wait a minute, we got an error that jquery could not be found:

    $ typings install jquery
    typings ERR! message Unable to find "jquery" ("npm") in the registry.

So we see that it is trying to find it in "npm".  I'm not sure what that exactly
means, I think that the 'typings' crew just haven't gotten around to putting an
entry for jquery in [their registry](https://github.com/typings/registry), which 
probably would be `npm/jquery.json` in that repository.  But we do see that it
was found and 'SOURCE' in the search results above is 'dt'.  To use that we execute
the command like this:

    typings install dt~jquery --save

Now it looks like it is found, but we still get an error:

    $ typings install dt~jquery --save
    typings ERR! message Attempted to compile "jquery" as an external module, but it looks like a global module.

This gives us a hint.  Looking at the [typings readme.md](https://github.com/typings/typings), it
says this:

    global - global (window.<var>) libraries (--global)
    
So now let's try this one more time, specifying the '--global' flag:

    typings install dt~jquery --global --save
    
That worked!  Now if we look there is a `typings.json` file with our saved type declarations:

    {
        "globalDependencies": {
            "jquery": "registry:dt/jquery#1.10.0+20160417213236"
        }
    }

And a 'typings' directory with the following layout:

    typings
    │ index.d.ts        <-- reference to all typings
    └─globals
      └─jquery
          index.d.ts    <-- type declaration
          typings.json  <-- config (source, version, etc.)

You probably want to put the typings directory in `.gitignore` and setup a script
in `project.json` that will run `typings install` for you after you run `npm install`:

    "scripts": {
        "postinstall": "typings install" 
    },

Now we can remove the declaration for '$' because typings is providing
a rich type declaration:

    document.getElementById('ts').style.backgroundColor = "#e0e0f8";
    //declare var $: any;
    $('#ts').append(' - jquery');

NOTE: I do not know why this works.  It worked in my editor (vscode)
right away so I could use code completion, but I had to stop
`webpack --watch` and restart it to get it to build.  My guess is that
both vscode and webpack know how to handle declarations added with
typings automatically.

