const http = require('http')
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write(req.url)
  console.log(req.url)
  res.end()
}).listen(8000)
