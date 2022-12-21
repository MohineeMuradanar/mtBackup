const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mohi@123',
  database: 'emp'
})

con.connect ((err)  => {
    if (err) throw err
    console.log("connected");

    const sql = 'update employee set ename = "Gita", address = "Bid" where eid = 3'

    con.query(sql, (err, result) => {
        if (err) throw err
        console.log(result.affectedRows, " records updated");
    })
})