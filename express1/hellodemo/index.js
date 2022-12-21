const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('<h1> hello world </h1>')
})

app.get('/json', (req, res) => {
  // res.send([
  //     {id: 1, name: "Mohinee"},
  //     {id:2, name: "Priya"},
  //     {id:3, name: "jaya"}
  // ])

  const data = [
    {id: 1, name: 'Mohinee'},
      {id:2, name: "Priya"},
      {id:3, name: "jaya"}
  ]
  res.send(data)
//   const jsonData = JSON.stringify(data)
// res.send(jsonData)
// const objData = JSON.parse(jsonData)
// res.send( objData)

})
app.listen(port)
console.log(`listening port no ${port}`)
