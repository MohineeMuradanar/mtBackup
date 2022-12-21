const EventEmitter = require('events')

const event = new EventEmitter()

// event.on('sayMyName', () => {
//   console.log('your name is Mohinee')
// })
// event.on('sayMyName', () => {
//   console.log('your name is Bhausaheb ')
// })

// event.on('sayMyName', () => {
//   console.log('your name is Muradanar')
// })

// event.emit('sayMyName')

event.on("checkPage", (sc, msg) => {
    console.log(`status code is "${sc}" and the page is "${msg}"`);
})

event.emit("checkPage", 200, "ok");
