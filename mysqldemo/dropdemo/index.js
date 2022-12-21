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
  // const sql = 'create table student(id int, name varchar(30))'

//   const sql = 'drop table student'
//   const sql = 'drop table if exists student'

  const sql = 'show tables'
  con.query(sql, (err, result) => {
    if (err) throw err
    // console.log("table deleted : ", result)
    console.log('result : ', result)
  })
})
