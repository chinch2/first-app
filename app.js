const EventEmitter = require("events"); //Defining a class
const Logger = require("./logger");
const logger = new Logger();

// Register a listener
logger.on("messageLogged", arg => {
  console.log("A message have been logged by", arg);
});

logger.log("I'm a Badass car!");
