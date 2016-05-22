document.write('<p>entry.js says "Hello, world!"</p>');
var jsmodule = require('./jsmodule');
console.log('jsmodule:', JSON.stringify(jsmodule, null, 2));
var tsmodule = require('./tsmodule');
console.log('tsmodule:', JSON.stringify(tsmodule, null, 2));

