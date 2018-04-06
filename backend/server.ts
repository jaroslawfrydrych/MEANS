'use strict';

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import * as indexRoute from './routes';

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        }

    static bootstrap(): Server {
        return new Server();
    }

    config(): void {
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'ejs');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use(function (err, req, res, next) {
            const error = new Error('Not Found');
            err.status = 404;
            next(err);
        });
    }

    routes(): void {
        const router = express.Router();
        const index: indexRoute.Index = new indexRoute.Index();
        router.get('/', index.index.bind(index.index));
        this.app.use(router);
    }
}

const server = Server.bootstrap();
module.exports = server.app;