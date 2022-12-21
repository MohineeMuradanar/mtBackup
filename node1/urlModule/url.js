const url = require('url')
const addr = "http://localhost:8000/default.html?year=2017&month=february";
const q = url.parse(addr, true)

console.log("localhost = "+ q.host);
console.log("Pathname = "+ q.pathname);
console.log("search = "+q.search);


var qdata = q.query;
console.log("query = ", qdata);
console.log("year = ",qdata.year);
console.log("month =", qdata.month);