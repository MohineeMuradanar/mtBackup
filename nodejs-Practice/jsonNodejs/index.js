const fs = require("fs");

const myData = {
  name: 'Mohinee',
  age: 25,
  course: 'nodejs'
}

// console.log(myData)

const jsonData = JSON.stringify(myData)
// console.log(jsonData )

// const objData = JSON.parse(jsonData)
// console.log(objData)

// fs.writeFile('json1.json', jsonData, (err) => {
//   console.log('done')
// })

fs.readFile('json1.json', 'utf-8', (err, data) => {
  console.log('simple data', data);
  const orgData = JSON.parse(data) ;
  console.log('original data', orgData);

});
