const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mohi@123',
  database: 'crud'
})

con.connect((err) => {
  if (err) throw err

  console.log('you are connected with mysql database')
})

exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "emp body can't be empty"
    })
  }

  var params = req.body
  console.log(params)

  const sql = 'insert into emp set ?'
  con.query(sql, params, (err, result, fields) => {
    if (err) throw err
    return res.send({
        data: result, message: "new emp record has been created"
    })
  })
}


exports.findAll = (req, res ) => {
    const sql = "select * from emp"

    con.query(sql, (err, result, fields) => {
        if (err) throw err
        // res.send(JSON.stringify(result))
        res.send(result)
    })
}

exports.findOne =(req, res) => {
    const sql = "select * from emp where eid = ? "
    con.query(sql, [req.params.eid], (err, results, fields) => {
        if (err) throw err
        res.send(JSON.stringify(results))
    })
}

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "emp body can't be empty"
        })
    }

    console.log(req.params.id);
    console.log(req.params.description);

    const sql = "update emp set name = ? where id = ? "
    con.query(sql, [req.body.name, req.body.eid], (err, results, fields) => {
        if (err) throw err

        res.send(JSON.stringify(results))
    })
}




exports.delete = (req, res) => {
    console.log(req.body);

    const sql = "delete from emp where eid = ?"

    con.query(sql, [req.body.id], (err, results, fields) => {
        if (err) throw err
        res.send("Record has been deleted")
    })
}