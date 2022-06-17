const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-type': 'text/html' });
    response.end('<h3>Hello World</h3>')
});

server.listen(3333, console.log("✔ Server started at http://localhost:3333"));
