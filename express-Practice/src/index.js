// const express = require('express')
// const path = require('path')
// const app = express()
// const port = 3000

// const staticPath = path.join(__dirname, '../public')

// // built-in middleware
// app.use(express.static(staticPath))

// app.get('/', (req, res) => {
//   res.send('Hello world from the express js')
// })

// app.get('/about', (req, res) => {
//   res.send('<h1> <i> Hello world from the about page. </i> </h1> ')
// })

// app.listen(port, () => {
//   console.log(`listening the port no ${port}`)
// })


const express = require('express');
const app = express();
const port = 8000;

// built - in middleware

app.use(express.static(path));

app.get("/",(req, res) => {
  res.send('Hello from express server');
})

app.listen(port, () => {
  console.log( `listening port no ${port}`);
})