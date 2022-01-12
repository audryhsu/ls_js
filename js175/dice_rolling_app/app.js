const HTTP = require('http');
const URL = require('url').URL;
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
    let content = rollDice(getParams(path));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`${method} ${path}\n`);
    res.write(`${content}\n`);
    res.end();
  }
});

// server is listening for requests
SERVER.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

function getParams(path) {
  let myURL = new URL(path, `http://localhost:${PORT}`);
  return myURL.searchParams;
}

function rollDice(params) {
  let rolls = params.get('rolls');
  let sides = params.get('sides');
  let body = '';

  for (let i = 0; i < rolls; i++) {
    body += `${dieRoll(1, sides)}\n`;
  }
  return body;
}

function dieRoll(min, max) {
  return String(Math.floor(Math.random() * (max - min + 1) + min));
}
