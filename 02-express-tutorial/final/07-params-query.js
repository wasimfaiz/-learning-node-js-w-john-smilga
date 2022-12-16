const express = require('express');
const app = express();
const { products } = require('./data');

// app.get('/', (req, res) => {
//   // They'll be a CORS error
//   res.json(products);
// });

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href ="/api/products">Api </a> ');
});

// API ROUTING
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

// ROUTE PARAMETERS
app.get('/api/products/:productId', (req, res) => {
  // console.log(req);
  // console.log(req.params);
  const { productId } = req.params;
  const singleProduct = products.find((product) => product.id === +productId);

  if (!singleProduct) {
    res.send('<h1>Product Does Not Exist</h1>');
  }

  res.json(singleProduct);
});

// QUERY PARAMETERS
app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
  console.log(req.params);
  res.send('hello world');
});

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.startsWith(search)
    );
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, +limit);
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send('No products matched your search');
    // JavaScript will keep reading the code if you omit the return function in your if statements
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
