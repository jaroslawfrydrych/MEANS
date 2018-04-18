'use strict';

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import * as mongoose from 'mongoose';
import * as cookieParser from 'cookie-parser';
import {AppConfig} from './app.config';
import swagger from './swagger';
import mongooseConfig from './mongoose.config';
import jwtMiddleware from '../app/middleware/jwt.middleware';

class Server {
    public app: express.Application;
    private router = express.Router();

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
        this.homeRoute();

        this.router.use((req, res, next) => {
            console.log(`I sense a disturbance in the force on url ${req.url}...`); // DEBUG
            next();
        }, jwtMiddleware);

        this.app.use(this.router);
    }

    private homeRoute() {
        this.router.get('/', (req, res) => {
            res.render('index', {
                title: AppConfig.TITLE ? AppConfig.TITLE : ''
            });
        });
    }

    private swagger() {
        swagger(this.app);
    }

    private mongoose() {
        mongooseConfig(mongoose);
    }
}

const server = Server.bootstrap();
module.exports = server.app;
