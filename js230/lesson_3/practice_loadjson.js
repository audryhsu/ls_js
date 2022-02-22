/*
Write some JavaScript code that loads JSON data from https://api.github.com/repos/rails/rails, parses the JSON into a JavaScript object, and then logs the HTTP status code and the number of open issues to the console.
*/

let url = 'https://api.github.com/repos/rails/rails';

let request = new XMLHttpRequest();
request.open('GET', url);
// request.responseType = 'json';
// request.setRequestHeader('Content-Security-Policy', connect-src 'self')

request.addEventListener('load', (e) => {
  console.log('target was', e.target);

  let data = JSON.parse(request.response);
  // let data = request.response;
  console.log('==DATA==');
  console.log(data);
  console.log('==STATUS=a=');
  console.log(data.status);
});

request.send();
