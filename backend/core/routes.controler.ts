import * as express from 'express';

export class RoutesControler {
    constructor(protected app: express.Application,
                protected router: express.Router) {
    }

    public static bootstrap(app: express.Application, router: express.Router) {
    }
}