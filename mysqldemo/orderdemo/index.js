const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mohi@123',
  database: 'emp'
})

con.connect((err) => {
    if (err) throw err
    console.log("connected");

    // const sql = 'select * from employee order by ename'

    // descending order
    const sql = "select * from employee order by address desc"
    con.query(sql, (err, result) => {
        if (err) throw err
        console.log("result :", result);
    })
})