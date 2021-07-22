var http = require('http');




var server = http.createServer((req, resp) => {

    if (req.url == '/about') {
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<html><body><h1>hello im about page</h1></body></html>');
        resp.end();
    } else if (req.url == '/login') {
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<html><body><h1>im login page</h1></body></html>');
        resp.end();
    }
    else
        resp.end("searched is not matched");
});
server.listen(8010);
console.log("im server started")