"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const swaggerTools = require("swagger-tools");
const app_config_1 = require("./app.config");
exports.default = (app, swaggerDoc) => {
    const options = {
        swaggerUi: path.join(__dirname, '/swagger.json'),
        controllers: path.join(__dirname, app_config_1.AppConfig.SWAGGER_CONTROLLERS),
        useStubs: process.env.NODE_ENV === app_config_1.AppConfig.ENV
    };
    swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
        app.use(middleware.swaggerMetadata());
        app.use(middleware.swaggerValidator());
        app.use(middleware.swaggerRouter(options));
        app.use(middleware.swaggerUi());
    });
};
