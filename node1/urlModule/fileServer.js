const http = require("http");
const url = require("url");
const fs = require("fs");
const port =8000;

http.createServer( (req, res) => {
    const q = url.parse(req.url, true);
    var fileName = "." + q.pathname;
    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.writeHead(404, {"content-type": "text/html"});
            return res.end("404 not Found");
        }
        res.writeHead(200, {"content-type": "text/html"});
        return res.end(data);
    })
}).listen(port);
console.log(`listening port no ${port}`);