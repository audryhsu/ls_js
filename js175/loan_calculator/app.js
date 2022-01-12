const HTTP = require('http');
const URL = require('url').URL;
const QUERYSTRING = require('querystring');
const PORT = 3000;
const HANDLEBARS = require('handlebars');
// const FS = require('fs'); // no longer needed
// const PATH = require('path');
const ROUTER = require('router');
const FINALHANDLER = require('finalhandler');
const SERVESTATIC = require('serve-static');
const MIME_TYPES = {
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

const LOAN_OFFER_SOURCE = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
    <link rel="stylesheet" href="/assets/css/styles.css">
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <table>
        <tbody>
          <tr>
            <th>Amount:</th>
            <td>
              <a href='/loan-offer?amount={{amountDecrement}}&duration={{duration}}'>- $100</a>
            </td>
            <td>$ {{amount}}</td>
            <td>
              <a href='/loan-offer?amount={{amountIncrement}}&duration={{duration}}'>+ $100</a>
            </td>
          </tr>
          <tr>
            <th>Duration:</th>
            <td>
              <a href='/loan-offer?amount={{amount}}&duration={{durationDecrement}}'>- 1 year</a>
            </td>
            <td>{{duration}} years</td>
            <td>
              <a href='/loan-offer?amount={{amount}}&duration={{durationIncrement}}'>+ 1 year</a>
            </td>
          </tr>
          <tr>
            <th>APR:</th>
            <td colspan='3'>{{apr}}%</td>
          </tr>
          <tr>
            <th>Monthly payment:</th>
            <td colspan='3'>$ {{payment}}</td>
          </tr>
        </tbody>
      </table>
    </article>
  </body>
</html>
`;
const LOAN_FORM_SOURCE = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
    <style type="text/css">
      body {
        background: rgba(250, 250, 250);
        font-family: sans-serif;
        color: rgb(50, 50, 50);
      }

      article {
        width: 100%;
        max-width: 40rem;
        margin: 0 auto;
        padding: 1rem 2rem;
      }

      h1 {
        font-size: 2.5rem;
        text-align: center;
      }

      form,
      input {
        font-size: 1.5rem;
      }
      form p {
        text-align: center;
      }
      label,
      input {
        display: block;
        width: 100%;
        padding: 0.5rem;
        margin-top: 0.5rem;
      }
      input[type="submit"] {
        width: auto;
        margin: 1rem auto;
        cursor: pointer;
        color: #fff;
        background-color: #01d28e;
        border: none;
        border-radius: 0.3rem;
      }
    </style>
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <form action="/loan-offer" method="get">
        <p>All loans are offered at an APR of {{apr}}%.</p>
        <label for="amount">How much do you want to borrow (in dollars)?</label>
        <input type="number" name="amount" value="">
        <label for="amount">How much time do you want to pay back your loan?</label>
        <input type="number" name="duration" value="">
        <input type="submit" name="" value="Get loan offer!">
      </form>
    </article>
  </body>
</html>
`;
const LOAN_OFFER_TEMPLATE = HANDLEBARS.compile(LOAN_OFFER_SOURCE);
const LOAN_FORM_TEMPLATE = HANDLEBARS.compile(LOAN_FORM_SOURCE);
const APR = .05;

function parseFormData(request, callback) {
  let body = '';
  request.on('data', chunk => {
    body += chunk.toString();
  });
  request.on('end', () => {
    let data = QUERYSTRING.parse(body);
    data.amount = Number(data.amount);
    data.duration = Number(data.duration);
    callback(data);
  });
}

function render(template, data) {
  let html = template(data);
  return html;
}

function createHTML(body) {
  const HTML_START = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>`;

  const HTML_END = `
    </article>
  </body>
</html>`;

  return `${HTML_START}\n${body}\n${HTML_END}`;
}

function createLoanTable(content) {
  const HTML_TABLE = `
      <table>
        <tbody>
          <tr>
            <th>Amount:</th>
            <td>
              <a href='/?amount=${content['Amount'] - 100 }&duration=${content['Duration']}'>- $100</a>
            </td>
            <td>$${content['Amount']}</td>
          <td>
            <a href='/?amount=${content['Amount'] + 100 }&duration=${content['Duration']}'>+ $100</a>
          </td>
          </tr>
          <tr>
            <th>Duration:</th>
            <td>
              <a href='/?amount=${content['Amount']}&duration=${content['Duration'] - 1}'>- 1 year</a>
            </td>
            <td>${content['Duration']} years</td>
          <td>
            <a href='/?amount=${content['Amount']}&duration=${content['Duration'] + 1}'>+ 1 year</a>
          </td>
          </tr>
          <tr>
            <th>APR:</th>
            <td colspan='3'>${content['APR']}%</td>
          </tr>
          <tr>
            <th>Monthly payment:</th>
              <td colspan='3'>$${content['Monthly payment']}</td>
          </tr>
        </tbody>
      </table>`;

  return HTML_TABLE;
}

function calculateLoan(data) {
  const MONTHS_PER_YEAR = 12;
  let monthlyIR = APR / MONTHS_PER_YEAR;

  data.amountIncrement = data.amount + 100;
  data.amountDecrement = data.amount - 100;
  data.durationIncrement = data.duration + 1;
  data.durationDecrement = data.duration - 1;
  data.apr = APR * 100;
  data.payment = (data.amount * (monthlyIR / (1 - Math.pow((1 + monthlyIR), (-data.duration * MONTHS_PER_YEAR))))).toFixed(2);

  return data;
}

function getParams(path) {
  let myURL = new URL(path, `http://localhost:${PORT}`);
  let searchParams = myURL.searchParams;
  let data = {};
  data.amount = Number(searchParams.get('amount'));
  data.duration = Number(searchParams.get('duration'));
  return data;
}

function getPathname(path) {
  let myURL = new URL(path, `http://localhost:${PORT}`);
  return myURL.pathname;
}


let router = ROUTER()
router.use(SERVESTATIC('public'))

router.get('/', function(req, res) {
  let content = render(LOAN_FORM_TEMPLATE, {apr: APR * 100} );

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(`${content}\n`);
  res.end();
})

router.get('/loan-offer', function(req, res) {
  let data = calculateLoan(getParams(req.url));
  let content = render(LOAN_OFFER_TEMPLATE, data);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(`${content}\n`);
  res.end();
})

router.post('/loan-offer', function(req, res) {
  parseFormData(req, parsedData => {
    let data = calculateLoan(parsedData);
    let content = render(LOAN_OFFER_TEMPLATE, data);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(`${content}\n`);
    res.end();
  });
})

router.get('*', function(req, res) {
  res.statusCode = 404;
  res.write(`Cannot find the page you're looking for...\n`);
  res.end();
})
const SERVER = HTTP.createServer((req, res) => {
  router(req, res, FINALHANDLER(req, res))
  });
});

SERVER.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
