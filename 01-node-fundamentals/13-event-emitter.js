// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events');
const customEmitter = new EventEmitter();

// on - listen for an event
// emit - emit an event
// keep track of the order
// additional arguments
// built-in modules utilize it
// first parameter is the event
// are these like reducer and action types?
// So you can create an object?

const methods = {
  response: 'response',
};

customEmitter.on(methods.response, (name, id) => {
  console.log(`data received ${name} with id: ${id}`);
});

customEmitter.on(methods.response, () => {
  console.log('second listener');
});

customEmitter.emit(methods.response, 'john', 34);
