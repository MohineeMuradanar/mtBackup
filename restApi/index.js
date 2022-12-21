const express = require("express");
const bodyParser = require("body-parser");
const port = 4000;

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.json({"message": "welcome to crud app "})
})

require("./app//routes/routes")(app)

app.listen(port, () => {
    console.log(` Server is listening on port ${port} `);
})