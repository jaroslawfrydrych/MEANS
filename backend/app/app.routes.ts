import * as express from 'express';
import {App} from './app.controler'

export class AppRoutes {
    constructor(private app: express.Application,
                private router: express.Router) {
    }

    public routes() {
        const appCtrl = new App.AppControler();
        this.router.get('/asd/:value', appCtrl.index.bind(appCtrl.index));
    }
}