const EventEmitter = require("events"); //Defining a class
const emitter = new EventEmitter(); // Instantiating the class

var url = "http://mylogger.io/log";

function log(message) {
  console.log(message);
  // Raise an event
  emitter.emit("messageLogged", {
    Brand: "Bugatti",
    Model: "Veyron",
    Year: 2020,
    url
  });
}

module.exports = log;
