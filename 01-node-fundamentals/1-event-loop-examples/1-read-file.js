const { readFile, writeFile } = require('fs');

console.log('started a first task');

//  Read file is asynchronous. Event loop offloads this to a file system, and runs the callback only when it gets a result. So it offloads this task, then keeps running the other tasks.
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log('completed first task');
});
console.log('starting next task');
