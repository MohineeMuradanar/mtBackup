// import express from 'express'
const express = require('express')

const router = express.Router()

// import con from '../connections/db.js'
const con = require('../connections/db.js')

router.post('/user', (req, res) => {
  const user = req.body
  console.log(user)

  // const sql = "insert into emp (id, name, address, designation) values (?,?,?,?)"

  // con.query(sql, [user.id, user.name, user.address, user.designation], (err, result, fields) => {

  const sql = 'insert into emp set ?'
  con.query(sql, [user], (err, result, fields) => {
    if (err) {
      res.status(500).json({err: 'something failed'})
    } else {
      res.status(200).json(result)
    }
  })
})

router.get('/users', (req, res) => {
  const sql = 'select * from emp'
  con.query(sql, (err, result, fields) => {
    if (err) {
      res.status(500).json({err: 'something failed'})
    } else {
      res.status(200).json(result)
    }
  })
})

router.get('/user/:id', (req, res) => {
  const sql = 'select * from emp where id = ?'
  const id = req.params.id
  con.query(sql, [id] , (err, result, fields) => {
    if (err) {
      res.status(500).json({err: 'something failed'})
    } else {
      res.status(200).json(result)
    }
  })
})

router.patch('/user/:id', (req, res) => {
  const user = req.body
  const id = req.params.id

  console.log('user = ', user)
  console.log('id = ', id)
  const sql = 'update emp set ? where id = ?'

  con.query(sql, [user, id], (err, result, fields) => {

    if (err) {
      res.status(500).json({err: 'something failed'})
    } else {
      res.status(200).json({"update records : ":result.affectedRows})
    }
  })
})

router.delete('/user/:id', (req, res) => {
  const sql = 'delete from emp where id = ?'
  const id = req.params.id

  con.query(sql, [id], (err, result, fields) => {
    if (err) {
      res.status(500).json({err: 'something failed'})
    } else {
      res.status(200).json(`record deleted successfully of employee id is : ${id}`)
    }
  })
})

// export default router
module.exports = router
