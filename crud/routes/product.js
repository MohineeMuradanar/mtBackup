const bodyParser = require('body-parser')
const express = require('express')
const con = require('../connection')
// const router = express.Router()
const app = express()
app.use(bodyParser.json())

app.post('/create', (req, res, next) => {
    console.log("in post method");
  var product = req.body
 sql = 'INSERT INTO product (name,description,price) VALUES(?,?,?)'
 
  con.query(sql, [product.name, product.description, product.price], (err, result, fields) => {
    if (err) {
      return res.status(500).json(err)
    } else {
        console.log("inserted record is : ", fields);
      return res.status(200).json({message: 'product added successfully'})
    }
  })
})

app.listen(8001)

// module.exports = router
