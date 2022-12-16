const http = require('http');
const { readFileSync } = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html', 'utf-8');
const homeStyles = readFileSync('./navbar-app/styles.css', 'utf-8');
const homeImage = readFileSync('./navbar-app/logo.svg', 'utf-8');
const homeLogic = readFileSync('./navbar-app/browser-app.js', 'utf-8');

// createServer creates the server and takes in a callback which will be invoked every single time the user hits the server.
const server = http.createServer((req, res) => {
  // STATUS_CODES
  // MIME_TYPES
  const url = req.url;
  console.log(url);

  if (url == '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
    res.end();
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>About page</h1>');
    res.end();
  } else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(homeStyles);
    res.end();
  } else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    res.write(homeImage);
    res.end();
  } else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(homeLogic);
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1> page not found</h1>');
    res.end();
  }
});

// you always need to add the response.end()

// A port is a number assigned to uniquely identify a connection endpoint and to direct data to a specific service. There are specific ports for different things.
server.listen(5000);
