"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_routes_1 = require("./app.routes");
var express = require("express");
var security_routes_1 = require("./security/security.routes");
exports.default = (function (app) {
    var router = express.Router();
    router.use(function (req, res, next) {
        console.log("I sense a disturbance in the force on url " + req.url + "...");
        next();
    });
    app_routes_1.AppRoutes.bootstrap(app, router).routes();
    security_routes_1.SecurityRoutes.bootstrap(app, router).routes();
    app.use('/api', router);
});
