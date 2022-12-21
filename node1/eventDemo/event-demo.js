const fs = require("fs");
const rs = fs.createReadStream('./demoFile.txt');

rs.on('open', ()=> {
    console.log("the file is open")
})