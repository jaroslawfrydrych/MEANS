'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
var passport = require("passport");
var app_config_1 = require("./app.config");
var app_module_1 = require("../app/app.module");
var passport_config_1 = require("./passport.config");
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
        this.app.use(express.static('public'));
        passport_config_1.default(passport);
        this.app.use(passport.initialize());
    };
    Server.prototype.routes = function () {
        this.homeRoute();
        this.userRoutes();
        this.app.use(this.router);
    };
    Server.prototype.homeRoute = function () {
        this.router.get('/', function (req, res) {
            res.render('index', {
                title: app_config_1.AppConfig.TITLE ? app_config_1.AppConfig.TITLE : ''
            });
        });
    };
    Server.prototype.userRoutes = function () {
        app_module_1.default(this.app);
    };
    return Server;
}());
var server = Server.bootstrap();
module.exports = server.app;
