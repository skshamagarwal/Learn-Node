var http = require("http");
var data = [{ name: "Saksham", age: 16, place: "pune" },
{ name: "Temp", age: 26, place: "mumbai" }
]
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'application\json' })
    response.write(JSON.stringify(data));
    response.end();
}).listen(3900);
