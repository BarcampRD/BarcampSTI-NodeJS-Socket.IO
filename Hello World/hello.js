var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hola Mundo!');
}).listen(8080);

console.log('Servidor ejecutandose en http://localhost:8080/');
