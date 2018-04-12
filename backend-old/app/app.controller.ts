import * as express from 'express';

export class AppController {
    public index(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.json({
            value: req.params.value
        });
    }
}
