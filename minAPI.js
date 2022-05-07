// Minor API
var http = require('http'); // Request Transfer Protocol
http.createServer(function(request, response){
    response.write("Hello from Node Js Server");
    response.end();
}).listen(5000);