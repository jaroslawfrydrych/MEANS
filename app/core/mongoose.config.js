"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_config_1 = require("./app.config");
exports.default = function (mongoose) {
    var gracefulExit = function () {
        mongoose.connection.close(function () {
            console.log("Mongoose connection " +
                "has disconnected through app termination");
            process.exit(0);
        });
    };
    mongoose.connection.on("connected", function () {
        console.log("Successfully connected to " + app_config_1.AppConfig.ENV +
            " database on startup ");
    });
    mongoose.connection.on("error", function (err) {
        console.error("Failed to connect to " + app_config_1.AppConfig.ENV + " " +
            " database on startup ", err);
    });
    mongoose.connection.on('disconnected', function () {
        console.log("Mongoose default connection to " + app_config_1.AppConfig.ENV +
            " database disconnected");
    });
    process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);
    var uri = "mongodb://" + app_config_1.AppConfig.MONGO.host + ":" + app_config_1.AppConfig.MONGO.port + "/" + app_config_1.AppConfig.MONGO.database;
    mongoose.connect(uri, function (error) {
        if (error)
            throw error;
    });
};
