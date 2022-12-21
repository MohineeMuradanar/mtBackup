const bodyParser = require("body-parser");
const express = require("express");
const con = require("./connection")
const empRoute = require("./routes/product")
const app = express();

app.use(express.urlencoded({extended: true}) )
app.use(express.json());
app.use(bodyParser.json())  
app.use('/emp', empRoute);

module.exports = app;