const mysql = require("mysql");
var con = mysql.createConnection({
    port:3306,
    host:"localhost",
    user:"root",
    password:"Mohi@123",
    database:"crud"
})

con.connect((err) => {
    if (err) throw err
    console.log("connected");
})

module.exports = con