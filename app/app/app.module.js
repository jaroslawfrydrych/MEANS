"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_routes_1 = require("./app.routes");
var express = require("express");
var swagger_1 = require("../core/swagger");
exports.default = function (app) {
    var router = express.Router();
    router.use(function (req, res, next) {
        console.log("I sense a disturbance in the force on url " + req.url + "...");
        next();
    });
    app_routes_1.AppRoutes.bootstrap(app, router).routes();
    swagger_1.default(app);
    app.use('/api', router);
};
