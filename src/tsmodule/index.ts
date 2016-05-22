declare var module: any; // access a global variable
export const name = "tsmodule/index.ts";
console.log('tsmodule - module: ', module);
console.log('json:', JSON.stringify(module, null, 2));
