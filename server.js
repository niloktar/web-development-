const http = require ("http");
const fs= require("fs");

const requestListener = function (req,res) {
    const index = fs.readFileSync("index.html")
    comsole.log(req)
    res.whiteHead(200);
    res.end(index.toString);
}

const server = http.createServer(requestListener);
server.listen(8080); 