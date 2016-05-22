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