const EventEmitter = require("events"); //Defining a class
const emitter = new EventEmitter(); // Instantiating the class

// Register a listener
emitter.on("messageLogged", arg => {
  console.log("Listener called");
  console.log(arg.id);
  console.log(arg.url);
});

// Raise an event
emitter.emit("messageLogged", { id: 1, url: "http://" }); //Signaling that an event had happened
