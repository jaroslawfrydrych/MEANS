'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.config = function () {
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'jade');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use(express.static(path.join(__dirname, 'bower_components')));
        this.app.use(function (err, req, res, next) {
            var error = new Error('Not Found');
            err.status = 404;
            next(err);
        });
    };
    Server.prototype.routes = function () {
        var router = express.Router();
        router.get('*', function (req, res) {
            res.send('Hello world!');
        });
        this.app.use(router);
    };
    return Server;
}());
var server = Server.bootstrap();
module.exports = server.app;
