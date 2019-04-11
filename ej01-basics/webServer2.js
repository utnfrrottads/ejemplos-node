var http = require('http');
var fs=require('fs');

http.createServer(function (req, res) {

  let file='.'+req.url;
  fs.readFile(file,'utf8',(err,data)=>{
    if(err){
      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.end(err.Error);
    } else {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(data);
    }
  });
}).listen(8080);

console.log('VIIIIVEEEEEEEE');
