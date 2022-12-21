const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mohi@123',
  database: 'emp'
})

con.connect((err) => {
    if(err) throw err;

    const sql = 'delete from employee where address = "Kashi"'

    con.query(sql, (err, result) => {
        if (err) throw err
        console.log("no of records deleted : " + result.affectedRows);

    })
})