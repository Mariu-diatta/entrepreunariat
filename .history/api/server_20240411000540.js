var http= require("http");

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("Je suis bien dans le serveur");
    res.end();
}).listen(8080);