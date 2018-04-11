import * as express from 'express';
import {AppController} from './app.controller'
import {RoutesInterface} from '../core/routes.interface';
import {RoutesController} from '../core/routes.controller';

export class AppRoutes extends RoutesController implements RoutesInterface {
    private appCtrl: AppController = new AppController();

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
