import * as express from 'express';
import * as APP_CONFIG from '../../config/config.json';

module Route {
    export class Index {
        public index(req: express.Request, res: express.Response, next: express.NextFunction) {
            res.render('index', {
                title: APP_CONFIG.title ? APP_CONFIG.title : ''
            })
        }
    }
}

export = Route;