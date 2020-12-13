const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Happy birthday Lior');
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  console.log("Lior is happy");
});

