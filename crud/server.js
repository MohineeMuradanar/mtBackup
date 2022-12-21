const http = require("http");
const app = require("./index");
// const bodyParser = require("body-parser");
// app.use(bodyParser.json())


const port = 8001;

const server = http.createServer();

app.listen(port);
console.log(`listening port no ${port}`);
