'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const jsyaml = require("js-yaml");
const app_config_1 = require("./app.config");
const swagger_1 = require("./swagger");
const mongoose_config_1 = require("./mongoose.config");
const jwt_1 = require("./jwt");
class Server {
    constructor() {
        this.router = express.Router();
        this.swaggerSpec = fs.readFileSync(path.join(__dirname, '../../swagger/swagger.yaml'), 'utf8');
        this.swaggerDoc = jsyaml.safeLoad(this.swaggerSpec);
        this.app = express();
        this.dashboardPath = Server.escapeRegExp(app_config_1.AppConfig.DASHBOARD_PATH);
        this.apiPath = Server.escapeRegExp(this.swaggerDoc.basePath + '/');
        this.config();
        this.routes();
        this.swagger();
        this.mongooseConfig();
        this.jwtConfig();
    }
    static bootstrap() {
        return new Server();
    }
    config() {
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.set('view engine', 'ejs');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cookieParser());
        this.app.use(express.static('public'));
    }
    routes() {
        this.router.use((req, res, next) => {
            console.log(`I sense a disturbance in the force on url ${req.url}...`);
            next();
        });
        this.app.use(this.router);
        this.homeRoute();
        this.dashboardRoute();
    }
    static escapeRegExp(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    }
    homeRoute() {
        const regexPattern = `^(${this.apiPath}|${this.dashboardPath})`;
        const regex = new RegExp(regexPattern);
        this.router.get('*', (req, res, next) => {
            if (regex.test(req.url)) {
                next();
            }
            else {
                res.render('index', {
                    title: app_config_1.AppConfig.TITLE,
                    basePath: app_config_1.AppConfig.BASE_PATH
                });
            }
        });
    }
    dashboardRoute() {
        this.router.get(app_config_1.AppConfig.DASHBOARD_PATH + '*', (req, res) => {
            res.render('dashboard', {
                title: app_config_1.AppConfig.TITLE_DASHBOARD,
                basePath: app_config_1.AppConfig.DASHBOARD_PATH
            });
        });
    }
    swagger() {
        swagger_1.default(this.app, this.swaggerDoc);
    }
    mongooseConfig() {
        mongoose_config_1.default(mongoose);
    }
    jwtConfig() {
        jwt_1.Jwt.jwtConfig(this.app, this.router, this.swaggerDoc);
    }
}
const server = Server.bootstrap();
module.exports = server.app;
