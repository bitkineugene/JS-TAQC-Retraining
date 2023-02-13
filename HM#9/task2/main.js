// Task2

const http = require('http');
const os = require('os');
const greeting = require('./personal_module');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.write(`Date of request: ${greeting.date}<br>`);
  res.write(greeting.showMessage(os.userInfo().username));

  res.end();
})

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
