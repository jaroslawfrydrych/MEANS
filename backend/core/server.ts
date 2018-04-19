'use strict';

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import * as mongoose from 'mongoose';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';
import * as jsyaml from 'js-yaml';
import * as jwt from 'express-jwt';
import {AppConfig} from './app.config';
import swagger from './swagger';
import mongooseConfig from './mongoose.config';
import {isNullOrUndefined} from 'util';

class Server {
    public app: express.Application;
    private router: express.Router = express.Router();
    private swaggerSpec = fs.readFileSync(path.join(__dirname, '../../swagger/swagger.yaml'), 'utf8');
    private swaggerDoc = jsyaml.safeLoad(this.swaggerSpec);

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.swagger();
        this.mongoose();
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
        this.jwtGuard();
        this.homeRoute();
        this.router.use((req, res, next) => {
            console.log(`I sense a disturbance in the force on url ${req.url}...`); // DEBUG
            next();
        });

        this.app.use(this.router);
    }

    private homeRoute() {
        this.router.get('/', (req, res) => {
            res.render('index', {
                title: AppConfig.TITLE,
                basePath: AppConfig.BASE_PATH
            });
        });
    }

    private swagger() {
        swagger(this.app, this.swaggerDoc);
    }

    private mongoose() {
        mongooseConfig(mongoose);
    }

    private jwtGuard() {
        const unprotected = this.getUnprotectedRoutes();
        this.app.use(jwt({
            secret: AppConfig.SECRET,
            getToken: (req) => this.getToken(req)
        }).unless({path: ['/', ...unprotected]}));
    }

    private getUnprotectedRoutes() {
        const basePath = this.swaggerDoc.basePath;
        const paths: Array<string> = [];

        for (const pat in this.swaggerDoc.paths) {
            const pathParams = this.swaggerDoc.paths[pat];
            if (pathParams[AppConfig.NO_FIREWALL_PATH_PARAMETER_NAME]) {
                paths.push(basePath + pat);
            }
        }

        return paths;
    }

    private getToken(req) {
        if (!isNullOrUndefined(req.cookies.BEARER)) {
            return req.cookies.BEARER;
        }

        return null;
    }
}

const server = Server.bootstrap();
module.exports = server.app;
