const http = require('http');

var server =http.createServer((req,re mongs)=>{

res.write("Helloe ");
res.end();
});

server.on('connection',()=>{console.log("connections")});

server.listen(5000);