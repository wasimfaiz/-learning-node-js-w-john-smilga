// Modules
// -- CommonJS, every file is a module ( by default )
// -- Modules, encapsulated code (only share minimum)
//  When you import a module, you invoke the code because imports are wrapped as a function

// Built in modules
// OS, PATH, FS, HTTP

const names = require('./4-names');
const sayHi = require('./5-utils');

const { john, peter } = names;
const data = require('./6-alternative-modules');
require('./7-mind-grenade');

sayHi('susan');
sayHi(john);
sayHi(peter);
