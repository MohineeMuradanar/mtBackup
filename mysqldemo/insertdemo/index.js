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

  const sql = "insert into employee (ename, address, designation) values('Rina', 'Latur', 'Director' )"

//   const sql = "insert into employee (ename, address, designation) values ?";
//   const values = [
    // ['Radha', 'Pune', 'Engineer' ],
    // ['Jaya', "Nagar", "SSE"],
//   ];

  con.query(sql, (err, result) => {
    // con.query(sql, [values], (err, result) => {
    if (err) throw err
    // console.log('1 record inserted')
    // console.log("number of rows inserted = "+ result.affectedRows);
    console.log("1 record inserted , ID : "+ result.insertId);
  })
})
