import * as express from 'express';

export module App {
    export class AppControler {
        public index(req: express.Request, res: express.Response, next: express.NextFunction) {
            res.json({
                value: req.params.value
            });
        }
    }
}