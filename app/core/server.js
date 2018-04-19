'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const jsyaml = require("js-yaml");
const jwt = require("express-jwt");
const app_config_1 = require("./app.config");
const swagger_1 = require("./swagger");
const mongoose_config_1 = require("./mongoose.config");
const util_1 = require("util");
class Server {
    constructor() {
        this.router = express.Router();
        this.swaggerSpec = fs.readFileSync(path.join(__dirname, '../../swagger/swagger.yaml'), 'utf8');
        this.swaggerDoc = jsyaml.safeLoad(this.swaggerSpec);
        this.app = express();
        this.config();
        this.routes();
        this.swagger();
        this.mongoose();
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
        this.jwtGuard();
        this.homeRoute();
        this.router.use((req, res, next) => {
            console.log(`I sense a disturbance in the force on url ${req.url}...`);
            next();
        });
        this.app.use(this.router);
    }
    homeRoute() {
        this.router.get('/', (req, res) => {
            res.render('index', {
                title: app_config_1.AppConfig.TITLE,
                basePath: app_config_1.AppConfig.BASE_PATH
            });
        });
    }
    swagger() {
        swagger_1.default(this.app, this.swaggerDoc);
    }
    mongoose() {
        mongoose_config_1.default(mongoose);
    }
    jwtGuard() {
        const unprotected = this.getUnprotectedRoutes();
        this.app.use(jwt({
            secret: app_config_1.AppConfig.SECRET,
            getToken: (req) => this.getToken(req)
        }).unless({ path: ['/', ...unprotected] }));
    }
    getUnprotectedRoutes() {
        const basePath = this.swaggerDoc.basePath;
        const paths = [];
        for (const pat in this.swaggerDoc.paths) {
            const pathParams = this.swaggerDoc.paths[pat];
            if (pathParams[app_config_1.AppConfig.NO_FIREWALL_PATH_PARAMETER_NAME]) {
                paths.push(basePath + pat);
            }
        }
        return paths;
    }
    getToken(req) {
        if (!util_1.isNullOrUndefined(req.cookies.BEARER)) {
            return req.cookies.BEARER;
        }
        return null;
    }
}
const server = Server.bootstrap();
module.exports = server.app;
