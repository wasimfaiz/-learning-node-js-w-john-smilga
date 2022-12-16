const http = require('http');

// The first parameter represents the incoming request, the second is the response we're sending back
const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === '/') {
    res.write('Welcome to our home page with Node.js');
  }

  if (req.url === '/about') {
    res.write('Welcome to our about page with Node.js');
    res.end();
  }

  res.end(`
  <h1>Oops!</h1>
  <p> The page you are looking for doesn't exist</p>
  <button>
  <a href='/'>Go back to the home page</a> </button>
  `);
});

server.listen(5000);
