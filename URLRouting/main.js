var http = require('http')
var router1 = require('./router1.js')
var router2 = require('./router2.js')
var router3 = require('./router3.js')

let myServer = http.createServer(router1.handleRequest).listen(8080);

myServer.on("request",router2.handleRequest);
myServer.on("request",router3.handleRequest);