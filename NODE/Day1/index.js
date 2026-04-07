import http from 'http';

const PORT = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Server is running on port 5000');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});