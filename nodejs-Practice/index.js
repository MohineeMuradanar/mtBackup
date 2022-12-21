const fs = require("fs");

// fs.writeFileSync("read.txt", "Welcome to node js");

fs.writeFileSync("read.txt", "Mohinee muradanar, welcome to node js");



fs.appendFileSync("read.txt", " how are you?");

const buf_data =fs.readFileSync("read.txt", "utf-8");
console.log(buf_data);

// const origin_data =buf_data.toString();

// console.log(origin_data);

fs.renameSync("read.txt", "readWrite.txt");

