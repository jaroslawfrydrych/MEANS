'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const app_config_1 = require("./core/app.config");
const app = require('./core/server');
const port = app_config_1.AppConfig.PORT;
const server = http.createServer(app);
app.set('port', port);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
function onListening() {
    const addr = server.address();
    const bind = typeof addr === "string"
        ? "pipe " + addr
        : "port " + addr.port;
    console.log("Listening on " + bind);
}
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof port === "string"
        ? "Pipe " + port
        : "Port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}
