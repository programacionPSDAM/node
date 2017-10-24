var http = require('http');

var server  = http.createServer () ;

server.on ( "request" , function ( req , res ) {
  res.statusCode = 200;
  res.setHeader ( 'Content-Type' , 'text/plain') ;
  res.end ( 'Hello World \n ') ;
}) ;

server.listen(3000);
