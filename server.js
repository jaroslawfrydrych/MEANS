'use strict';

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    static bootstrap() {
        return new Server();
    }

    config() {
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

    routes() {
        const router = express.Router();
        router.get('*', (req, res) => {
            res.send('Hello world!');
        });
        this.app.use(router);
    }
}

const server = Server.bootstrap();
module.exports = server.app;