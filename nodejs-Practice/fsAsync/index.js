const fs =require("fs");

// fs.writeFile("read.txt", "today is awesome day ...",
// (err) => {
// console.log("file is created");
// console.log(err);
// });


// fs.appendFile("read.txt", "what about you",
// (err) => {
// console.log("task completed");
// });


fs.readFile("read.txt", "utf8" ,(err, data) => {
console.log(data);
});