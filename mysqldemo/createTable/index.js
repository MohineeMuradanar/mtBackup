const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mohi@123',
  database: 'emp'
})

con.connect((err) => {
  if (err) throw err
  console.log('connected')
  // const sql = "create table employee(eid int, ename varchar(30), address varchar(30), designation varchar(30))"

  //   const sql = 'create table employee(eid int AUTO-INCREMENT PRIMARY KEY, ename varchar(30), address varchar(30), designation varchar(30))'

 const sql = 'CREATE TABLE employee (eid INT AUTO_INCREMENT PRIMARY KEY, ename VARCHAR(30), address VARCHAR(30), designation VARCHAR(30))'

  con.query(sql, (err, result) => {
    if (err) throw err
    console.log('table created')
  })
})
