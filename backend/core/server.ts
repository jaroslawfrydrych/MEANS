'use strict';

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import * as passport from 'passport';
import {AppConfig} from './app.config';
import appModule from '../app/app.module';
import passportConfig from './passport.config';

class Server {
    public app: express.Application;
    private router = express.Router();

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public static bootstrap(): Server {
        return new Server();
    }

    private config(): void {
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.set('view engine', 'ejs');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(express.static(path.join(__dirname, 'public')));
        passportConfig(passport);
        this.app.use(passport.initialize());
    }

    private routes(): void {
        this.homeRoute();
        this.userRoutes();
        this.app.use(this.router);
    }

    private homeRoute() {
        this.router.get('/', (req, res) => {
            res.render('index', {
                title: AppConfig.TITLE ? AppConfig.TITLE : ''
            });
        });
    }

    private userRoutes(): void {
        appModule(this.app);
    }
}

const server = Server.bootstrap();
module.exports = server.app;
