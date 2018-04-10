import * as express from 'express';
const APP_CONFIG = require('../../config/config.json');

module Route {
    export class Index {
        public index(req: express.Request, res: express.Response, next: express.NextFunction) {
            res.render('index', {
                title: APP_CONFIG['title'] ? APP_CONFIG['title'] : ''
            })
        }
    }
}

export = Route;
