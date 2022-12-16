// started operating system process
console.log('first');
// setTimeout is asynchronous
setTimeout(() => {
  console.log('second');
}, 0);
console.log('third');
// completed and exited operating system process
