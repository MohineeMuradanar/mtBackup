// import mysql from "mysql";
const mysql = require("mysql")

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Mohi@123",
    database:"crud"
})

con.connect((err) => {
    if (err) throw err
    console.log("connected to database");

})

// export default con
module.exports = con