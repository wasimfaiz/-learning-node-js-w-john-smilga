const express = require('express');
const path = require('path');
const app = express();

// This made the css work, how?
// setup static and middleware
// create a folder called static or public (common naming convention) and dump all your assets in there. Static files are just files the server doesn't have to change.
// Use template engines to make things dynamic (server-side rendering)
app.use(express.static('./public'));

// Change to static assets index.html
// onchange, we moved the index.html to public folder, and it becomes the root file
// app.get('/', (req, res) => {
//   // Can also use path.join()
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// });

app.all('*', (req, res) => {
  res.status(404).send('resource not found');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000');
});
