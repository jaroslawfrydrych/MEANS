"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const swaggerTools = require("swagger-tools");
const jsyaml = require("js-yaml");
const app_config_1 = require("./app.config");
exports.default = (app) => {
    const spec = fs.readFileSync(path.join(__dirname, '../../swagger/swagger.yaml'), 'utf8');
    const swaggerDoc = jsyaml.safeLoad(spec);
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
