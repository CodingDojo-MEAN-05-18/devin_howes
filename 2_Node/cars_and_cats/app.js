var http = require('http');
var fs = require('fs');

// create the server using the http module
var server = http.createServer(function(request, response) {
    console.log(`client requested URL: ${ request.url } `);
    // routes:
    if (request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cars/new') {
        fs.readFile('./views/new_car.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    // stylesheets:
    else if (request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    // images:
    else if (request.url === '/images/cat1.jpg') {
        fs.readFile('./images/cat1.jpg', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/cat2.jpg') {
        fs.readFile('./images/cat2.jpg', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/cat3.jpg') {
        fs.readFile('./images/cat3.jpg', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/car1.jpg') {
        fs.readFile('./images/car1.jpg', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/car2.jpg') {
        fs.readFile('./images/car2.jpg', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/car3.jpg') {
        fs.readFile('./images/car3.jpg', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/car4.jpg') {
        fs.readFile('./images/car4.jpg', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    // error page:
    else {
        response.writeHead(404);
        response.end('Error: File not found');
    }
});

// server port:
server.listen(7077);
console.log('Running localhost on port 7077');