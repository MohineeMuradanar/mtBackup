const mysql = require('mysql');
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Mohi@123"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("connected");
});

