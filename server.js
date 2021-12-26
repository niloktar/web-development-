const http = require ("http");

const requestListener = function (req,res) {
    comsole.log(req)
    res.whiteHead(200);
    res.end("Hello");
}

const server = http.createServer(requestListener);
server.listen(8080);