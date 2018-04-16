'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
var passport = require("passport");
var mongoose = require("mongoose");
var app_config_1 = require("./app.config");
var passport_config_1 = require("./passport.config");
var swagger_1 = require("./swagger");
var mongoose_config_1 = require("./mongoose.config");
var Server = (function () {
    function Server() {
        this.router = express.Router();
        this.app = express();
        this.config();
        this.routes();
        this.swagger();
        this.mongoose();
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
        this.router.use(function (req, res, next) {
            console.log("I sense a disturbance in the force on url " + req.url + "...");
            next();
        });
        this.app.use(this.router);
    };
    Server.prototype.homeRoute = function () {
        this.router.get('/', function (req, res) {
            res.render('index', {
                title: app_config_1.AppConfig.TITLE ? app_config_1.AppConfig.TITLE : ''
            });
        });
    };
    Server.prototype.swagger = function () {
        swagger_1.default(this.app);
    };
    Server.prototype.mongoose = function () {
        mongoose_config_1.default(mongoose);
    };
    return Server;
}());
var server = Server.bootstrap();
module.exports = server.app;
