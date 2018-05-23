'use strict';

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import * as mongoose from 'mongoose';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';
import * as jsyaml from 'js-yaml';
import {AppConfig} from './app.config';
import swagger from './swagger';
import mongooseConfig from './mongoose.config';
import {Jwt} from './jwt';

class Server {
    public app: express.Application;
    private router: express.Router = express.Router();
    private swaggerSpec = fs.readFileSync(path.join(__dirname, '../../swagger/swagger.yaml'), 'utf8');
    private swaggerDoc = jsyaml.safeLoad(this.swaggerSpec);
    private dashboardPath: string;
    private apiPath: string;

    constructor() {
        this.app = express();
        this.dashboardPath = Server.escapeRegExp(AppConfig.DASHBOARD_PATH);
        this.apiPath = Server.escapeRegExp(this.swaggerDoc.basePath + '/');
        this.config();
        this.routes();
        this.swagger();
        this.mongooseConfig();
        this.jwtConfig();
    }

    public static bootstrap(): Server {
        return new Server();
    }

    private config(): void {
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.set('view engine', 'ejs');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(cookieParser());
        this.app.use(express.static('public'));
    }

    private routes(): void {

        this.router.use((req, res, next) => {
            console.log(`I sense a disturbance in the force on url ${req.url}...`); // DEBUG
            next();
        });

        this.app.use(this.router);
        this.homeRoute();
        this.dashboardRoute();
    }

    private static escapeRegExp(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    }

    private homeRoute(): void {
        const regexPattern = `^(${this.apiPath}|${this.dashboardPath})`;
        const regex = new RegExp(regexPattern);

        this.router.get('*', (req, res, next) => {
            if (regex.test(req.url)) {
                next();
            } else {
                res.render('index', {
                    title: AppConfig.TITLE,
                    basePath: AppConfig.BASE_PATH
                });
            }
        });
    }

    private dashboardRoute(): void {
        this.router.get(AppConfig.DASHBOARD_PATH + '*', (req, res) => {
            res.render('dashboard', {
                title: AppConfig.TITLE_DASHBOARD,
                basePath: AppConfig.DASHBOARD_PATH
            });
        });
    }

    private swagger(): void {
        swagger(this.app, this.swaggerDoc);
    }

    private mongooseConfig(): void {
        mongooseConfig(mongoose);
    }

    private jwtConfig(): void {
        Jwt.jwtConfig(this.app, this.router, this.swaggerDoc);
    }
}

const server = Server.bootstrap();
module.exports = server.app;
