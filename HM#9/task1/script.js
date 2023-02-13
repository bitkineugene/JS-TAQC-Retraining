// Task1

const http = require('http');
const path = require('path');
const os = require('os');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})

  res.write(`<html><body><h1>System Information</h1></body></html>`);
  res.write(`Current username: ` + os.userInfo().username + `<br>`);
  res.write(`Type of OS:` + os.type() + `<br>`);
  res.write(`System work time: ` + (os.uptime()/60).toFixed(2) + ` minutes <br>`);
  res.write(`Current work directory: ` + path.dirname(__filename) + `<br>`);
  res.end(`Server file name: ` + path.basename(__filename));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});