# typescript modules and index

Now to show how modules work in typescript...  Instead of using `require()`,
we will import what we want.  We will also use `index.ts` to export what we want
to from a folder.

First, create a new `phonebook` folder in the `src` directory:

    src/phonebook
    
Now add a file called `address.ts`:

    export class Address {
      constructor(
        public street: string,
        public city: string,
        public state: string,
        public zip: string
      ) {}
    }

Now add a file called 'person.ts':

    import { Address } from './address'

    export class Person {
      public constructor(
        public name: string,
        public address: Address,
        public phone: string,
        birthday: string
      ) {}
    }

Now edit `src/test.ts` to use our new classes:

    import { Person } from './phonebook/person';
    import { Address } from './phonebook/address';

    export = function() {
      var message = "Typescript is cool!";
      document.write(`<p>test.ts says "${message}"`)
      
      let address: Address = new Address("123 Main Street", "Springfield", "??", "12345");
      let person: Person = new Person("Jason", address, "555-555-5555", "1/1/1970");
      console.log("person:", person);
      document.write("<p>person:</p><pre>" + JSON.stringify(person) + "</pre>");
    }
    document.write("<p>test.ts is done</p>");

And finally delete `include.js` and change `entry.js` to not require it to
clean up our code, but also to use those classes itself:

    var test = require('./test.ts');
    document.write('<p>entry.js says "Hello, world!"</p>');
    test();
