const bodyParser = require('body-parser')
const express = require('express')
const con = require('../connection')
const router = express.Router()
const app = express()
app.use(bodyParser.json())

app.post('/create', (req, res, next) => {
    console.log("in post method");
  var emp = req.body
 sql = 'INSERT INTO emp (name,address) VALUES(?,?)'
 
  con.query(sql, [emp.name, emp.address], (err, result) => {
    if (err) {
      return res.status(500).json(err)
    } else {
        console.log("inserted record is : ", result.insertId);
      return res.status(200).json({message: 'product added successfully'})
    }
  })
})

app.listen(8002)

module.exports = router
