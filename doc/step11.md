# Step 11 - More on typings and modules

## (continued from Step 10)

Now we can remove the declaration for '$' because typings is providing
a rich type declaration:

    document.getElementById('ts').style.backgroundColor = "#e0e0f8";
    //declare var $: any;
    $('#ts').append(' - jquery');

NOTE: I've figured out that this works because the typescript compiler
is working off of the `tsconfig.json` in our main directory.  It is
going through every directory not in our `excludes`.  To see this in
action, let's create a script tab in `index.html` and define a `Dog`
class (function) that has a method 'Bark' that will alert and a global
instance of that class called `dogInstance`:

    <head>
        <script type="text/javascript">
        function Dog() {}
        Dog.prototype.bark = function() { console.warn('BARK!'); };
        var dogInstance = new Dog();
        </script>
    </head>

Now in `tsmodule/index.ts' we access that global `dogInstance` variable
and make it bark:

    document.getElementById('ts').style.backgroundColor = "#e0e0f8";
    $('#ts').append(' - jquery');
    declare var dogInstance: Dog; 
    dogInstance.bark();

This causes an error because typescript doesn't know what a Dog is.
So let's create a new folder `fu/this/subdir` and create an
`anything.d.ts` file.  The name doesn't matter, but the extension
has to be `.d.ts`.  No matter what we name it or where we put it,
as long as it isn't in the folders excluded by `tsconfig.json` any
declarations in it will be available to any typescript files compiled
with that `tsconfig.json` as it's context.

    interface Dog {
        bark(): void;
    }

Now webpack will happily compile our typescript since we have the type
declared.  What we can't do however is create a new instance of the
class.  Webpack will error when we this to `tsmodule/index.ts`:

    let d: Dog = new Dog();
    d.bark();

That is because an interface let's you know what methods and properties
are on an object of that type, but it doesn't let you know that
there exists an external concrete representation of a class.  Let's change
`fu/this/subdir/anything.d.ts` 

    declare class Dog {
        bark(): void;
    }
    
 Now webpack should build your bundle just fine and your console should
 show two barks, one from the global `dogInstance` we declared
 in our html script tag in javascript and one from the `d` instance
 of `Dog` we created ourselves. 

