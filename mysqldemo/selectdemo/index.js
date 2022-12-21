const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mohi@123',
  database: 'emp'
})

con.connect(function (err) {
  if (err) throw err

  //   const sql = "select * from employee"
  const sql = ' select ename, address from employee '
  con.query(sql, (err, result, fields) => {
    if (err) throw err
    // console.log("result = ", result)
    console.log('result of 6th record : ', result[6].address)
    // console.log("fields = ", fields)

    // name of the field
    console.log('field description : '+ fields[0].name)
  })
})
