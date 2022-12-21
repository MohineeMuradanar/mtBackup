const events = require('events')
const eventEmitter = new events.EventEmitter();
const fs = require("fs");

// const events = require("events")
// const eventEmitter = new events.EventEmitter()

const myEventHandler = () => {
  console.log('i hear scream')
}

eventEmitter.on('scream', myEventHandler)

eventEmitter.emit('scream')



const myfileHandler = () => {
fs.readFile("./demoFile.txt", (err, data) => {
    if (err) throw err;
    console.log("data = ",data.toString());
})

}

eventEmitter.on('file', myfileHandler)

eventEmitter.emit('file')
