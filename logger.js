const EventEmitter = require("events"); //Defining a class

class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    // Raise an event
    this.emit("messageLogged", {
      Brand: "Bugatti",
      Model: "Veyron",
      Year: 2020
    });
  }
}

module.exports = Logger;
