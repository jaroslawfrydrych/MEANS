'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app_config_1 = require("./app.config");
const swagger_1 = require("./swagger");
const mongoose_config_1 = require("./mongoose.config");
const jwt_middleware_1 = require("../app/middleware/jwt.middleware");
class Server {
    constructor() {
        this.router = express.Router();
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
        this.homeRoute();
        this.router.use((req, res, next) => {
            console.log(`I sense a disturbance in the force on url ${req.url}...`);
            next();
        }, jwt_middleware_1.default);
        this.app.use(this.router);
    }
    homeRoute() {
        this.router.get('/', (req, res) => {
            res.render('index', {
                title: app_config_1.AppConfig.TITLE ? app_config_1.AppConfig.TITLE : ''
            });
        });
    }
    swagger() {
        swagger_1.default(this.app);
    }
    mongoose() {
        mongoose_config_1.default(mongoose);
    }
}
const server = Server.bootstrap();
module.exports = server.app;
