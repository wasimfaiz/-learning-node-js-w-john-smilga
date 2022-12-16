// The difference between setTimeout and SetInterval is that the first runs after the dedicated time, and exits the process. While the second run at an interval of the dedicated time. They are both asynchronous functions.

setInterval(() => {
  console.log('hello world');
}, 2000);
console.log(`I will run first`);
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error
