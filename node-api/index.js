const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/routes.js")

// import express from "express";
// import bodyParser from "body-parser";
// import userRoutes from "./routes/routes.js"

const app = express();
const port = 5000;

app.use(bodyParser.json())

app.use("/", userRoutes)

app.get("/", (req, res) => {
    console.log("[test!]");
    res.send("hello from home page")
})

app.listen(port, () =>{
    console.log(`server run on port : http://localhost:${port}`);
})
