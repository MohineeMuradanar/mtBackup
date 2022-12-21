const uc = require("upper-case");

const http = require("http");

http.createServer( (req, res) => {
    res.writeHead(200, {"content-type": "text/html"});
    res.write(uc.upperCase("hello world!"));
    res.write(uc.upperCase("<br> welcome to the npm"));
    res.end();
}).listen(8000);