const express = require('express');
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');
const app = express();

// req => middleware => res
// You can stuck a function in between the path and callback function. That function will be the middleware

// Uses the middleware always
// Everything goes in order in Express
// app.use(authorize);

// 1. use vs route
// 2. options - our own / express / third party

// 2.1. app.use([logger, authorize]);
// setup static and middleware
// 2.2 app.use(express.static('./public'));
// 2.3 e.g morgan npm
app.use(morgan('tiny'));

// app.use([logger, authorize]);

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send('Items');
});

app.listen(5000, (req, res) => {
  console.log('Server listening on port 5000');
});
