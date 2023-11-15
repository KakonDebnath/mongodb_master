const EvenEmitter = require('events');
const myEmitter = new EvenEmitter();

// Listener

myEmitter.on("birthday", (gift) => {
    console.log(`Happy birthday to you ${gift}`);
})

myEmitter.on("birthday", (gift) => {
    console.log(`I will send a ${gift} to you`);
})


myEmitter.emit("birthday", "Bike");

