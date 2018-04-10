'use strict';

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import * as indexRoute from '../routes/index';
import appModule from '../app/app.module';
import * as session from 'cookie-session';

class Server {
    public app: express.Application;
    private router = express.Router();

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    static bootstrap(): Server {
        return new Server();
    }

    config(): void {
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.set('view engine', 'ejs');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use(function (err, req, res, next) {
            const error = new Error('Not Found');
            err.status = 404;
            next(err);
        });
    }

    routes(): void {
        const index: indexRoute.Index = new indexRoute.Index();
        this.router.get('/', index.index.bind(index.index));
        this.userRoutes();
        this.app.use(this.router);
        this.app.use(session({
            name: 'session',
            keys: ['key1', 'key2'],
            cookie: {
                secure: true,
                httpOnly: true,
                domain: 'localhost',
                path: 'foo/bar'
            }
        }))
    }

    userRoutes(): void {
        appModule(this.app);
    }
}

const server = Server.bootstrap();
module.exports = server.app;
