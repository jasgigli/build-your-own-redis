// main.js - Entry point for the Build Your Own Redis project
// Implements a toy Redis server for the Codecrafters challenge.
// Author: Your Name <your.email@example.com>
// See ../README.md and ../docs/ for more information.
//
// TODO: Add observability/logging for connections and commands.

const net = require("net");

const server = net.createServer((connection) => {
  // Handle connection
  connection.write("+PONG\r\n");

});

server.listen(6379, "127.0.0.1",()=>{
  console.log("Server connected");
});

