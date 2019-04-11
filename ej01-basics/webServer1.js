var http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hola Mundo\nrequested: '+req.url);
  res.end();
}).listen(8080);

console.log('VIIIIVEEEEEEEE');
