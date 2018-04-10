'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
var indexRoute = require("../routes/index");
var app_module_1 = require("../app/app.module");
var session = require("cookie-session");
var Server = (function () {
    function Server() {
        this.router = express.Router();
        this.app = express();
        this.config();
        this.routes();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.config = function () {
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.set('view engine', 'ejs');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use(function (err, req, res, next) {
            var error = new Error('Not Found');
            err.status = 404;
            next(err);
        });
    };
    Server.prototype.routes = function () {
        var index = new indexRoute.Index();
        this.router.get('/', index.index.bind(index.index));
        this.userRoutes();
        this.app.use(this.router);
        this.app.use(session({
            name: 'session',
            keys: ['key1', 'key2'],
            cookie: {
                secure: true,
                httpOnly: true,
                domain: 'localhost',
                path: 'foo/bar'
            }
        }));
    };
    Server.prototype.userRoutes = function () {
        app_module_1.default(this.app);
    };
    return Server;
}());
var server = Server.bootstrap();
module.exports = server.app;
