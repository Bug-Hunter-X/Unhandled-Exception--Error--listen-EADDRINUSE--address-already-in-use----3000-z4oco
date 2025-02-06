const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;

server.on('listening', () => {
  console.log(`Server running at http://localhost:${server.address().port}/`);
});

server.listen(port);