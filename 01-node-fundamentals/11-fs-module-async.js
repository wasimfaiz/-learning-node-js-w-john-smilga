// FILE SYSTEM MODULE - ASYNCHRONOUS (NON-BLOCKING), SYNCHRONOUS (BLOCKING)
// THIS METHOD IS FOR THE ASYNCHRONOUS ONE
const { readFile, writeFile } = require('fs');
console.log('start');
// First argument is the path, second argument is a callback function which will execute after our functionality is complete just like we'd do with addEventListener.

// ONE - USING CALLBACK HELL
// readFile('./content/first.txt', 'utf-8', (err, result) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   const first = result;

//   readFile('./content/second.txt', 'utf-8', (err, result) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     const second = result;

//     writeFile(
//       './content/result-async.txt',
//       `Here is the result: ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.error(err);
//           return;
//         }
//         console.log('done with this task');
//       }
//     );
//   });
// });
// console.log('starting next task');

// TWO - ALTERNATIVE ONE (not readable)
// const first = readFile('./content/first.txt', 'utf-8', (err, result) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
// }).then((result) => {
//   readFile('./content/second.txt', 'utf-8', (err, result) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//   }).then((result) => {
//     writeFile(
//       './content/result-async.txt',
//       `Here is the result: ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.error(err);
//           return;
//         }
//       }
//     ).then((result) => console.log(result));
//   });
// });

// THREE - ALTERNATIVE TWO
readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  const first = result;

  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    const second = result;

    writeFile(
      './content/result-async.txt',
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});
console.log('starting next task');
