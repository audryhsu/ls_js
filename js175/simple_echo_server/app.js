const HTTP = require('http');
const PORT = 3000;

// create server object that takes a request and response object and callback fun
const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;

  // create http response
  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`${method} ${path}\n`);
    res.end();
  }
});

// server is listening for requests
SERVER.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
