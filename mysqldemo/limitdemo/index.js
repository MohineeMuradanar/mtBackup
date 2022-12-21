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

  // short query for limit and offset
//   const sql = 'select * from employee  limit 5, 3'

  const sql = 'select * from employee  limit 5'

  con.query(sql, (err, result) => {
    if (err) throw err
    console.log(' result : ', result)
  })
})
