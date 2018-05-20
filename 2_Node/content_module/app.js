// http server
const http = require('http');
const fs = require('fs');

const static_contents = require('./static.js');

// create server
server = http.createServer(function (request, response){
    static_contents(request, response);
});
server.listen(8000);
console.log("Running localhost at port 8000");