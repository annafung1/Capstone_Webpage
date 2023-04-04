var http = require('http');
var fs = require('fs');
var path = require('path');

var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    var url = req.url;

    // Serve static files
    if (url.startsWith('/images/')) {
        var filePath = path.join(__dirname, url);
        var fileStream = fs.createReadStream(filePath);

        fileStream.on('error', function (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        });

        fileStream.pipe(res);
    }
    // Handle other requests
    else {
        if (url === '/') {
            var fileContents = fs.readFileSync('./home.html', { encoding: 'utf8' });
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fileContents);
        }
        else if (url === '/gas') {
            var fileContents = fs.readFileSync('./Gas.html', { encoding: 'utf8' });
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fileContents);
        }
        else if (url === '/temp') {
            var fileContents = fs.readFileSync('./Temp.html', { encoding: 'utf8' });
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fileContents);
        }
        else if (url === '/motion') {
            var fileContents = fs.readFileSync('./Motion.html', { encoding: 'utf8' });
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fileContents);
        }

        else if (url === '/light') {
            var fileContents = fs.readFileSync('./Light.html', { encoding: 'utf8' });
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fileContents);
        }

        else if (url === '/water') {
            var fileContents = fs.readFileSync('./Water.html', { encoding: 'utf8' });
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fileContents);
        }
        else if (url === '/fire') {
            var fileContents = fs.readFileSync('./gas_temp_fusion.html', { encoding: 'utf8' });
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(fileContents);
        }
        else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        }
    }
}).listen(port);
