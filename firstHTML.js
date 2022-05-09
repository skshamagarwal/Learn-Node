var http = require('http');
var page = `
<h1>My first Node HTML Page</h1> <br>
<input type='text' />
`

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-type': 'text/html'});
    response.write(page);
    response.end();
}).listen(3200)