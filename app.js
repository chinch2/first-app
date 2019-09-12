/**LOGGER APP */
// const EventEmitter = require("events"); //Defining a class
// const Logger = require("./logger");
// const logger = new Logger();

// // Register a listener
// logger.on("messageLogged", arg => {
//   console.log("A message have been logged by", arg);
// });

// logger.log("I'm a Badass car!");

/**HTTP SERVER */
const http = require("http");
const PORT = 3000;

// Create Server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Epale");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify({ Data: 1, Name: "Aran", Country: "Vzla" }));
    res.end();
  }
});

server.listen(PORT);
console.log(`Server listening on port ${PORT}`);
