const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mohi@123',
  database: 'emp'
})

con.connect((err) => {
    if (err) throw err
    // const sql = 'select * from employee where address = "Nashik" ';

    // const sql = "select * from employee where address like 'P%' ";

    const name = "Mohinee";
    const adr = "Nashik";
    // const sql = 'select * from employee where ename = ? or Address = ?'
    
    // escape query values using mysql.escape()
    const sql = 'select * from employee where address = '+ mysql.escape(adr)
    // con.query(sql, [name, adr] , (err, result) => {
    con.query(sql, (err, result) =>{
    if (err) throw err
        console.log("result : ", result);
    })
})