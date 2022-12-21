// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('<h1> Welcome to my page </h1>')
// })

// app.get('/about', (req, res) => {
//   res.send('<h1> <i> Welcome to my about page </i> </h1>')
// })

// app.get('/contact', (req, res) => {
//   res.send('Welcome to my contact page')
// })

// app.get('/data', (req, res) => {
//   res.json([{
//     id:1,
//     name: "Mohinee",
//   },
//   {
//     id:2,
//     name:"neha",
//   }

// ])
// })

// app.listen(port, () => {
//   console.log(`listening the port no ${port}`)
// })


const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("<h1> <i> Welcome to my page </i> </h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h2> <b> Welcome to my about page </b> </h2>");
})

app.get("/contact", (req, res) => {
  res.send("Welcome to my contact page");
})

app.get("/temp", (req, res) => {
  res.send([
    {
    id:1,
    name: "Mohinee",
  },
  {
    id:2,
    name:"muradanar",
  },
  {
    id:3,
    name:"radha",
  }
])
})

// app.listen(port, () => {
  // console.log(`listening the port no ${port}`);
// })

app.listen(port);
console.log(`listening port ${port}`);

