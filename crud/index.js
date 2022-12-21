const bodyParser = require("body-parser");
const express = require("express");
const con = require("./connection")
// const productRoute = require("./routes/product")
const app = express();

app.use(express.urlencoded({extended: true}) )
app.use(express.json());
app.use(bodyParser.json())
app.use('/product', productRoute);

module.exports = app;