var http = require('http');
var fs = require('fs');

// create the server using http module:
var server = http.createServer(function(request, response){
    console.log('client request URL: ', request.url );
    // routes:
    if (request.url === '/') { // root route
        fs.readFile('index.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    // ninjas page
    else if (request.url === '/ninjas') {
        fs.readFile('ninjas.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    // dojos form
    else if (request.url === '/dojos/new') {
        fs.readFile('dojos.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    // dojos submission
    else if (request.url === '/create') {
        fs.readFile('create.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    // css stylesheet:
    else if (request.url === '/stylesheets/style.css') {
        fs.readFile('style.css', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    // error route:
    else {
        response.writeHead(404);
        response.end('File not found');
    }
});

// server port
server.listen(6789);
console.log('Running in localhost on port 6789');