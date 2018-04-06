'use strict';

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';

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
        this.app.set('view engine', 'jade');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use(express.static(path.join(__dirname, 'bower_components')));
        this.app.use(function (err, req, res, next) {
            const error = new Error('Not Found');
            err.status = 404;
            next(err);
        });
    }

    routes(): void {
        const router = express.Router();
        router.get('*', (req, res) => {
            res.send('Hello world!');
        });
        this.app.use(router);
    }
}

const server = Server.bootstrap();
module.exports = server.app;