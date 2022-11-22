const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log('Url: ', req.url);
  console.log('Method: ', req.method);

  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  } else if (req.url === '/lighthouselabs') {
    console.log('Client requested lighthouselabs route!');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from the /lighthouselabs route!');
  } else if (req.url === '/users') {
    const usersDB = ['Andrew', 'Domara', 'Marcela'];
    res.end(JSON.stringify(usersDB));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found!');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
