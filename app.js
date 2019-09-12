const EventEmitter = require("events"); //Defining a class
const emitter = new EventEmitter(); // Instantiating the class

// Register a listener
emitter.on("messageLogged", arg => {
  console.log("A message have been logged by", arg);
});

const log = require("./logger");

log("Hi! I am a badass car!");
