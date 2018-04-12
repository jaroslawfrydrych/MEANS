"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var fs = require("fs");
var swaggerTools = require("swagger-tools");
var jsyaml = require("js-yaml");
var app_config_1 = require("./app.config");
exports.default = function (app) {
    var spec = fs.readFileSync(path.join(__dirname, '../../swagger/swagger.yaml'), 'utf8');
    var swaggerDoc = jsyaml.safeLoad(spec);
    var options = {
        swaggerUi: path.join(__dirname, '/swagger.json'),
        controllers: path.join(__dirname, app_config_1.AppConfig.SWAGGER_CONTROLLERS),
        useStubs: process.env.NODE_ENV === app_config_1.AppConfig.ENV
    };
    swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
        app.use(middleware.swaggerMetadata());
        app.use(middleware.swaggerValidator());
        app.use(middleware.swaggerRouter(options));
        app.use(middleware.swaggerUi());
    });
};
