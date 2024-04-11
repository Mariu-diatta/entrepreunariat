var http= require("http");

http.createServer(200, function (req, res) {

    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("Je suis bien dans le serveur");
    res.end();


});