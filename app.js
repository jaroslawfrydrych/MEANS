'use strict';
require("babel-register");
const app = require('./server');
const http = require('http');
const port = process.env.PORT || 3000;
app.set('port', port);
const server = http.createServer(app);

server.listen(port);

//add error handler
server.on("error", onError);

//start listening on port
server.on("listening", onListening);

function onListening() {
    const addr = server.address();
    const bind = typeof addr === "string"
        ? "pipe " + addr
        : "port " + addr.port;
    console.log("Listening on " + bind);
}

function onError(error) {
    console.warn(error);
}