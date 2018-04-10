import * as express from 'express';
import {AppControler} from './app.controler'
import {RoutesInterface} from '../core/routes.interface';
import {RoutesControler} from '../core/routes.controler';

export class AppRoutes extends RoutesControler implements RoutesInterface {
    private appCtrl: AppControler = new AppControler();

    constructor(protected app: express.Application,
                protected router: express.Router) {
        super(app, router);
    }

    public static bootstrap(app, router) {
        return new AppRoutes(app, router);
    }

    public routes() {
        this.router.get('/asd/:value', this.appCtrl.index.bind(this.appCtrl.index));
    }
}
