// Node Package Manager
// To Initialize with default values -> npm init -y
// To Initialize without default values -> npm init

// Install package -> npm i packagename
var http = require('http')
var uc = require('upper-case')

http.createServer(function(req, res) {
    res.write(uc.upperCase("node packages"));
    res.end();
}).listen(4000);

// Uninstall package -> npm uninstall packagename