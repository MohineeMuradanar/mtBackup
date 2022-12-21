const path =require('path');

console.log(path.dirname('/home/mohinee/node-practice/pathModule/path.js'));

console.log(path.extname('/home/mohinee/node-practice/pathModule/path.js'));

console.log(path.basename('/home/mohinee/node-practice/pathModule/path.js'));

console.log(path.parse('/home/mohinee/node-practice/pathModule/path.js'));;

const myPath =path.parse(`/home/mohinee/node-practice/pathModule/path.js`)

console.log(myPath.root);