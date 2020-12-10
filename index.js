const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Guy is the king');
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  console.log("the server is running");
});

