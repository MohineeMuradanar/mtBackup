const http = require("http");
const app = require("./index");
// const bodyParser = require("body-parser");
// app.use(bodyParser.json())
const router = require("./routes/product")

const port = 8002;

const server = http.createServer();

app.listen();
console.log(`listening port no ${port}`);